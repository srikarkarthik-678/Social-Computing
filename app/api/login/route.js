import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const { email, password } = body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return Response.json({ success: false, message: "User not found" });
    }
    if (user.password !== password) {
      return Response.json({ success: false, message: "Incorrect password" });
    }

    return Response.json({
      success: true,
      message: "Login successful!",
      user: {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
        username: user.username,
      },
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Server error: " + error.message },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return Response.json({ user: null });
  }

  const user = await User.findOne({ email });

  return Response.json(
    user
      ? {
          id: user._id,
          email: user.email,
          fullName: user.fullName,
          username: user.username,
        }
      : null
  );
}
