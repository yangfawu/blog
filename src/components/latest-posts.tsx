import { getPostsMeta } from "@/db"
import Link from "next/link"
import Action from "./action"
import Chip from "./chip"

export default async function LatestPosts() {
    const data = await getPostsMeta()

    return (
        <div className="space-y-8">
            <div>
                <p className="text-red-600 uppercase text-sm font-bold">
                    recent posts
                </p>
                <h1 className="text-3xl">See something of interest?</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {data.slice(0, 3).map(post => (
                    <div key={post.id} className="space-y-4">
                        <div className="space-y-1">
                            <h2 className="text-xl font-semibold">
                                {post.title}
                            </h2>
                            <p>{post.summary}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map(tag => (
                                <Link
                                    key={tag}
                                    href={`/search?q=${encodeURIComponent(tag)}`}
                                >
                                    <Chip>{tag}</Chip>
                                </Link>
                            ))}
                            {post.tags.length > 3 && (
                                <Chip $outline>
                                    +{post.tags.length - 3} more
                                </Chip>
                            )}
                        </div>
                        <div className="flex">
                            <Action>
                                <Link href={`/post/${post.id}`} prefetch>
                                    Read more
                                </Link>
                            </Action>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
