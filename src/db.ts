import { compileMDX } from "next-mdx-remote/rsc"

const SOURCE_REPO = `yangfawu/blog-posts`
const BASE_RAW_URL = `https://raw.githubusercontent.com/${SOURCE_REPO}/main`
const ALL_POSTS_URL = `https://api.github.com/repos/${SOURCE_REPO}/git/trees/main?recursive=1`

export async function getPost(id: string): Promise<Post | null> {
    const response = await fetch(`${BASE_RAW_URL}/posts/${id}.mdx`, {
        headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            "X-Github-Api-Version": "2022-11-28",
        },
    })

    if (!response.ok) return null

    const rawContent = await response.text()

    // additional guard in case GitHub does not return 404, but is actually 404
    if (rawContent.includes("404: Not Found")) return null

    const { frontmatter, content } = await compileMDX<Omit<PostMeta, "id">>({
        source: rawContent,
        components: {},
        options: {
            parseFrontmatter: true,
            mdxOptions: {},
        },
    })

    return {
        meta: {
            id,
            ...frontmatter,
            date: new Date(frontmatter.date),
            updated: new Date(frontmatter.updated),
        },
        content,
    }
}

interface AllPostResponse {
    tree: { path: string }[]
}
export async function getPostsMeta(): Promise<PostMeta[]> {
    const response = await fetch(ALL_POSTS_URL, {
        headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            "X-Github-Api-Version": "2022-11-28",
        },
    })

    if (!response.ok) return []

    const { tree: data } = (await response.json()) as AllPostResponse
    const posts = data
        .filter(({ path }) => path.endsWith(".mdx"))
        .filter(({ path }) => path.startsWith("posts/"))
        .map(({ path }) => path.replace(/posts\//, "").replace(/\.mdx/, ""))

    const results = await Promise.allSettled(posts.map(id => getPost(id)))
    return results
        .filter(
            (p): p is PromiseFulfilledResult<Post> =>
                p.status === "fulfilled" && p.value !== null,
        )
        .map(({ value: { meta } }) => meta)
        .sort((a, b) => b.date.getTime() - a.date.getTime())
}
