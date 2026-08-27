import { handleLeadRequest } from '../../../lib/lead-routing';
export async function POST(req: Request) {
  return handleLeadRequest(req, process.env.CRM_WEBHOOK_URL);
}
