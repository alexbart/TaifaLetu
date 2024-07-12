import Post from "@/models/post";
import { connectToDB } from "@/utils/database";

export async function GET(request) {
    try {
        await connectToDB()

        const posts = await Post.find()

        return new Response(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all posts", { status: 500 })
    }
}