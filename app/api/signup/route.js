import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";

export async function POST(req) {
  await dbConnect();

  const body = await req.json();
  const { email, password, fullName, username } = body;

  try {
    const exists = await User.findOne({ email });
    if (exists) {
      return Response.json({ success: false, message: "Email already registered" });
    }

    const user = await User.create({
      email,
      password,
      fullName,
      username,
    });

    return Response.json({ success: true, user }, { status: 201 });
  } catch (err) {
    return Response.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
