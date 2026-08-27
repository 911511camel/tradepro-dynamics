import {estimateBatch} from './batch-config.js';
export const ROUTING_CONFIG = {
  'b2b-export': {
    department: 'Commercial Export Division',
    responsibleDesk: 'Davao Hub Sales Desk',
    crmPipelineId: 'pipeline_b2b_export_v1',
    alertEmail: 'export-desk@tradeprodynamics.com',
  },
  'ppp-investor': {
    department: 'Strategic Projects & PPP Directorate',
    responsibleDesk: 'Executive Investment Board',
    crmPipelineId: 'pipeline_ppp_capital_v1',
    alertEmail: 'invest@tradeprodynamics.com',
  },
  'csr-intake': {
    department: 'Humanitarian & CSR Affairs',
    responsibleDesk: 'Global Mission Coordination Center',
    crmPipelineId: 'pipeline_csr_missions_v1',
    alertEmail: 'missions@tradeprodynamics.com',
  },
};


const optionalFields = ['phone','companyName','country','product','volume','incoterms','projectName','ticketSize','specialization','notes','productId','packaging','packageCount','estimatedWeightKg','leadTime'];
export async function handleLeadRequest(req, webhooks, send = fetch) {
  const json = (body, status=200) => Response.json(body, {status});
  if (!req.headers.get('content-type')?.includes('application/json')) return json({error:'Expected application/json'},415);
  let data;
  try {
    const raw = await req.text();
    if (raw.length > 16384) return json({error:'Payload too large'},413);
    data = JSON.parse(raw);
  } catch {return json({error:'Invalid JSON'},400);}
  if (!data || typeof data !== 'object' || Array.isArray(data)) return json({error:'Invalid payload'},400);
  if (typeof data.leadType !== 'string' || !Object.hasOwn(ROUTING_CONFIG,data.leadType)) return json({error:'Invalid lead routing tag'},400);
  for (const key of ['fullName','corporateEmail',...optionalFields]) {
    if (data[key] !== undefined && (typeof data[key] !== 'string' || data[key].length > 2000)) return json({error:'Invalid field: '+key},400);
  }
  if (!data.fullName?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.corporateEmail || '')) return json({error:'Name and valid email are required'},400);
  const route = ROUTING_CONFIG[data.leadType];
  const required = {'b2b-export':['companyName','product'],'ppp-investor':['companyName','projectName','ticketSize'],'csr-intake':['specialization']}[data.leadType];
  if (required.some(key=> !data[key]?.trim())) return json({error:'Missing inquiry details'},400);
  const webhookUrl = typeof webhooks === 'string' ? webhooks : webhooks?.[data.leadType];
  const estimate = data.productId ? estimateBatch(data.productId,data.packaging,data.packageCount) : null;
  if(data.productId && (data.leadType !== 'b2b-export' || !estimate)) return json({error:'Invalid batch configuration'},400);
  if (!webhookUrl) return json({error:'Inquiry service is not configured'},503);
  try { if(new URL(webhookUrl).protocol !== 'https:') return json({error:'Inquiry service configuration error'},503); } catch {return json({error:'Inquiry service configuration error'},503);}
  const record = {
    title:`[${data.leadType.toUpperCase()}] ${data.companyName || data.fullName} - ${data.product || data.projectName || data.specialization}`,
    pipeline:route.crmPipelineId,department:route.department,assigned_team:route.responsibleDesk,
    contact:{name:data.fullName.trim(),email:data.corporateEmail,phone:data.phone || null,company:data.companyName || null,country:data.country || null},
    custom_fields:{lead_type_tag:data.leadType,target_product:data.product || null,target_volume:data.volume || null,
      incoterms:data.incoterms || null,ppp_asset:data.projectName || null,ticket_size:data.ticketSize || null,
      packaging:data.packaging || null,package_count:estimate?.count || null,estimated_net_weight_kg:estimate?.netKg ?? null,lead_time:estimate ? '7–14 days (estimate)' : null,
      csr_role:data.specialization || null,notes:data.notes || null,system_timestamp:new Date().toISOString()}
  };
  try {
    const response = await send(webhookUrl,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(record),signal:AbortSignal.timeout(10000)});
    if (!response.ok) return json({error:'Inquiry delivery failed'},502);
    return json({success:true,assignedDepartment:route.department,desk:route.responsibleDesk});
  } catch {return json({error:'Inquiry delivery unavailable'},502);}
}
