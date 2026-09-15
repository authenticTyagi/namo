import { getEntriesEligibleForEditorial } from "@/db/queries/admin";
import { isAuthorizedPipelineRequest } from "@/lib/pipeline-auth";

/** Published entries with no published/pending editorial yet — what the drafting agent may write about. */
export async function GET(request: Request) {
  if (!isAuthorizedPipelineRequest(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const entries = await getEntriesEligibleForEditorial();
  return Response.json({ entries });
}
