import { z } from "zod";
import { auth } from "@/auth";
import { getVisibleComments, type CommentTarget } from "@/db/queries/comments";

/**
 * Comments and the viewer's session, fetched client-side by CommentSection.
 * This is the only place `auth()` runs for comments, which is what lets the
 * entry/editorial pages themselves be statically cached (TASKS T-1b). The
 * response is per-viewer (it marks the viewer's own comments), so it must
 * never be cached by a CDN or the browser.
 */
const querySchema = z
  .object({
    entryId: z.uuid().optional(),
    editorialId: z.uuid().optional(),
  })
  .refine((q) => Boolean(q.entryId) !== Boolean(q.editorialId), {
    message: "exactly one of entryId or editorialId is required",
  });

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const parsed = querySchema.safeParse({
    entryId: searchParams.get("entryId") ?? undefined,
    editorialId: searchParams.get("editorialId") ?? undefined,
  });
  if (!parsed.success) {
    return Response.json({ error: "Invalid query" }, { status: 400 });
  }

  const target: CommentTarget = parsed.data.entryId
    ? { entryId: parsed.data.entryId }
    : { editorialId: parsed.data.editorialId! };

  const session = await auth();
  const comments = await getVisibleComments(target, session?.user?.id ?? null);

  return Response.json(
    { signedIn: Boolean(session?.user), comments },
    { headers: { "Cache-Control": "private, no-store" } },
  );
}
