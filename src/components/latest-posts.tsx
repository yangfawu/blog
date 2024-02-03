import Link from "next/link"
import Action from "./action"
import Chip from "./chip"

async function getLatestPosts() {
    const data: Post[] = [
        {
            id: "exploring-the-world-of-react-hooks",
            title: "Exploring the World of React Hooks",
            summary:
                "A deep dive into the functionality and benefits of React Hooks.",
            tags: [
                "React",
                "JavaScript",
                "Hooks",
                "Frontend",
                "Web Development",
            ],
            category: "Programming",
            createdAt: new Date("2024-02-01"),
            updatedAt: new Date("2024-02-05"),
        },
        {
            id: "the-art-of-code-refactoring",
            title: "The Art of Code Refactoring",
            summary:
                "Learn the art of refactoring to improve code readability and maintainability.",
            tags: [
                "Code Refactoring",
                "Best Practices",
                "Software Development",
                "Clean Code",
                "Refactoring Techniques",
            ],
            category: "Coding Tips",
            createdAt: new Date("2024-01-15"),
            updatedAt: new Date("2024-01-20"),
        },
        {
            id: "mastering-css-grid-layouts",
            title: "Mastering CSS Grid Layouts",
            summary:
                "Unlock the power of CSS Grid for creating responsive and flexible layouts.",
            tags: [
                "CSS",
                "Web Development",
                "Layouts",
                "Responsive Design",
                "Frontend",
            ],
            category: "Frontend Development",
            createdAt: new Date("2024-01-10"),
            updatedAt: new Date("2024-01-20"),
        },
    ]
    return data
}

export default async function LatestPosts() {
    const results = await getLatestPosts()

    return (
        <div className="space-y-8">
            <div>
                <p className="text-red-600 uppercase text-sm font-bold">
                    recent posts
                </p>
                <h1 className="text-3xl">See something of interest?</h1>
            </div>
            <div className="flex gap-4 items-start [&>div]:flex-1">
                {results.map(post => (
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
                                <Link href={`/posts/${post.id}`}>
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
