import Action from "@/components/action"
import Chip from "@/components/chip"
import Link from "next/link"

interface Props {
    query: string
    data: PostMeta[]
}
export default function Results({ query, data }: Props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="col-span-full hidden only:flex items-center justify-center p-16 min-h-[30vh]">
                <div className="max-w-md italic text-sm text-center">
                    <p>No results found for <code className="font-semibold">{query}</code>.</p>
                    <p>Please try another query.</p>
                </div>
            </div>
            {data.map(post => (
                <div key={post.id} className="space-y-4">
                    <div className="space-y-1">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p>{post.summary}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map(tag => (
                            <Chip key={tag}>{tag}</Chip>
                        ))}
                        {post.tags.length > 3 && (
                            <Chip $outline>+{post.tags.length - 3} more</Chip>
                        )}
                    </div>
                    <div className="flex">
                        <Action>
                            <Link href={`/post/${post.id}`}>Read more</Link>
                        </Action>
                    </div>
                </div>
            ))}
        </div>
    )
}
