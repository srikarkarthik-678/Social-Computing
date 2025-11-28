import dbConnect from "@/utils/dbConnect";
import Opinion from "@/models/Opinion";

export async function POST(req) {
  await dbConnect();
  const { username, message } = await req.json();

  if (!username || !message) {
    return Response.json({ success: false, message: "Missing fields" });
  }

  const saved = await Opinion.create({ username, message });

  return Response.json({ success: true, opinion: saved });
}
