import dbConnect from "@/utils/dbConnect";
import Opinion from "@/models/Opinion";

export async function POST(req) {
  await dbConnect();

  const { opinionId, option } = await req.json();

  if (!opinionId || !option) {
    return Response.json({ success: false, message: "Missing fields" });
  }

  const incField = option === "yes" ? { yes: 1 } : { no: 1 };

  await Opinion.findByIdAndUpdate(opinionId, { $inc: incField });

  return Response.json({ success: true });
}
