import dbConnect from "@/utils/dbConnect";
import Poll from "@/models/Poll";

export async function GET() {
  await dbConnect();

  const polls = await Poll.find().sort({ createdAt: -1 });

  return Response.json({
    success: true,
    polls
  });
}
