import dbConnect from "@/utils/dbConnect";
import Opinion from "@/models/Opinion";

export async function GET() {
  await dbConnect();

  // get the latest opinion
  const latest = await Opinion.findOne().sort({ createdAt: -1 });

  return Response.json({
    success: true,
    message: latest ? latest.message : "No opinions submitted yet"
  });
}
