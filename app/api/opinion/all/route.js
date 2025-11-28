import dbConnect from "@/utils/dbConnect";
import Opinion from "@/models/Opinion";

export async function GET() {
  await dbConnect();

  const opinions = await Opinion.find().sort({ createdAt: -1 });

  return Response.json({ success: true, opinions });
}
