import { getAllTrustedSourcesForPipeline } from "@/db/queries/admin";
import { isAuthorizedPipelineRequest } from "@/lib/pipeline-auth";

// The pipeline's read of the admin-curated trusted-sources whitelist
// (/admin/trusted-sources). A research agent drafting a citation should
// check the source's publisher against this list before assigning a
// credibility tier — an entry on this list is pre-vetted at the given
// tier; anything else still needs the agent's own judgment against
// scripts/entries/OFFICIAL_SOURCES.md and the site's general tiering
// discipline (genuine government/intergovernmental = official_primary,
// independent media/think tanks = reputable_media even if authoritative).
export async function GET(request: Request) {
  if (!isAuthorizedPipelineRequest(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const sources = await getAllTrustedSourcesForPipeline();
  return Response.json({ sources });
}
