import { getAllEntrySlugsForDedupe } from "@/db/queries/admin";
import { isAuthorizedPipelineRequest } from "@/lib/pipeline-auth";

export async function GET(request: Request) {
  if (!isAuthorizedPipelineRequest(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const entries = await getAllEntrySlugsForDedupe();
  return Response.json({ entries });
}
