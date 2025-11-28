    import dbConnect from "@/utils/dbConnect";
    import Vote from "@/models/Vote";

    export async function GET() {
    await dbConnect();

    const yes = await Vote.countDocuments({ option: "yes" });
    const no = await Vote.countDocuments({ option: "no" });
    const total = yes + no;

    return Response.json({
        yes,
        no,
        yesPercent: total ? (yes / total) * 100 : 0,
        noPercent: total ? (no / total) * 100 : 0
    });
    }
