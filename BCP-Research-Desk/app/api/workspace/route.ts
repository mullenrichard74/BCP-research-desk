import { getDb } from '../../../db';
import { workspace } from '../../../db/schema';
import { eq } from 'drizzle-orm';
export async function GET() { try {const rows=await getDb().select().from(workspace).where(eq(workspace.id,'desk'));return Response.json(rows[0]?JSON.parse(rows[0].data):null);}catch{return Response.json({error:'Unable to load saved workspace'},{status:500});} }
export async function PUT(request:Request) {try {const data:any=await request.json();if(!Array.isArray(data.opportunities)||JSON.stringify(data).length>2000000)return Response.json({error:'Invalid workspace'},{status:400});await getDb().insert(workspace).values({id:'desk',data:JSON.stringify(data)}).onConflictDoUpdate({target:workspace.id,set:{data:JSON.stringify(data)}});return Response.json({saved:true});}catch{return Response.json({error:'Save failed'},{status:500});}}
