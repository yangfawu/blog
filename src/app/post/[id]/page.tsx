import Chip from "@/components/chip"
import Divider from "@/components/divider"
import SnatchingDiv from "@/components/snatching-div"
import { getPost, getPostsMeta } from "@/db"
import { format } from "fecha"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

interface Props {
    params: { id: string }
}
export default async function Page({ params }: Props) {
    const { id } = params
    const post = await getPost(id)

    if (!post) return notFound()

    const {
        meta: { title, summary, category, tags, date, updated },
        content,
    } = post

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <p className="text-center">
                    <Link href={`/search?q=${encodeURIComponent(category)}`}>
                        <span className="uppercase text-white bg-red-600 px-2 py-1 text-xs">
                            {category}
                        </span>
                    </Link>
                </p>
                <h1 className="text-center text-5xl font-semibold">{title}</h1>
                <h3 className="text-center text-lg">{summary}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                    {tags.map(tag => (
                        <Link
                            key={tag}
                            href={`/search?q=${encodeURIComponent(tag)}`}
                        >
                            <Chip $outline>{tag}</Chip>
                        </Link>
                    ))}
                </div>
            </div>
            <p className="text-center font-mono">
                Yangfa Wu &#xB7; {format(date, "longDate")}
            </p>
            <div className="flex items-start gap-8 sm:gap-16 flex-wrap sm:flex-nowrap">
                <div className="space-y-8 flex-1">
                    <article>{content}</article>
                    <div className="space-y-2">
                        <Divider />
                        <p className="text-right text-sm">
                            Last updated on {format(updated, "longDate")}
                        </p>
                    </div>
                </div>
                <div className="hidden md:block min-w-60 lg:min-w-80 sticky top-4">
                    <h3 className="font-semibold text-xl">Table of Contents</h3>
                </div>
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    const posts = await getPostsMeta()
    return posts.map(({ id }) => ({ id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = params
    const post = await getPost(id)

    if (!post) {
        return {
            title: "Post not found",
        }
    }

    const { title, date, summary } = post.meta

    return {
        title,
        authors: {
            name: "Yangfa Wu",
            url: "https://github.com/yangfawu",
        },
        description: `${format(date, "shortDate")} - ${summary}`,
    }
}
