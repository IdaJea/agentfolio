import { getMarket } from '../../../lib/market.mjs';
export const dynamic='force-dynamic';
export async function GET(){try{return Response.json(await getMarket(),{headers:{'Cache-Control':'no-store'}})}catch(e){return Response.json({error:e instanceof Error?e.message:'行情读取失败'},{status:503})}}
