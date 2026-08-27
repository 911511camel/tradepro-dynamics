import { handleLeadRequest } from '../../../lib/lead-routing';
export async function POST(req: Request) {
  return handleLeadRequest(req, {
    'b2b-export': process.env.CRM_B2B_WEBHOOK_URL,
    'ppp-investor': process.env.CRM_INVESTOR_WEBHOOK_URL,
    'csr-intake': process.env.CRM_CSR_WEBHOOK_URL,
  });
}
