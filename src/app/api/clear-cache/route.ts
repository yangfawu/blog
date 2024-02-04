import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    const secret = (req.nextUrl.searchParams.get("secret") || "").trim()

    if (process.env.CLEAR_CACHE_PW === secret) {
        revalidatePath("/")
        return NextResponse.json({ success: true })
    }

    return new NextResponse("Unauthorized", { status: 401 })
}
