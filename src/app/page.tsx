import Action from "@/components/action"
import LatestPosts from "@/components/latest-posts"
import SnatchingDiv from "@/components/snatching-div"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
    return (
        <main className="flex-1 py-16">
            <SnatchingDiv className="space-y-16">
                <div className="flex gap-8 [&>div]:flex-1">
                    <div className="hidden md:block">
                        <Image
                            src="/front.jpg"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto lg:max-h-96 rounded-md object-cover"
                            alt="https://unsplash.com/photos/silver-laptop-computer-near-notebook-ck0i9Dnjtj0"
                        />
                    </div>
                    <div className="space-y-8">
                        <div>
                            <p className="text-red-600 uppercase text-sm font-bold">
                                hey there
                            </p>
                            <h1 className="text-3xl">Welcome to my blog!</h1>
                        </div>
                        <div className="md:hidden">
                            <Image
                                src="/front.jpg"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto max-h-80 rounded-md object-cover"
                                alt="https://unsplash.com/photos/silver-laptop-computer-near-notebook-ck0i9Dnjtj0"
                            />
                        </div>
                        <p>
                            This a space dedicated to delving into various
                            topics encountered on my journey through the realm
                            of computer science. These posts serve as a
                            collection of insights and solutions, not only for
                            my own reference but also as a resource for fellow
                            enthusiasts. As you navigate through my entries, may
                            you find valuable information and inspiration to
                            ease your exploration of the intriguing facets
                            within the world of CS!
                        </p>
                        <div>
                            <Action>
                                <Link href="/search">Browse my posts</Link>
                            </Action>
                            <Action>
                                <Link
                                    href="https://yangfawu.github.io/"
                                    target="_blank"
                                >
                                    See my portfolio
                                </Link>
                            </Action>
                        </div>
                    </div>
                </div>
                <LatestPosts />
            </SnatchingDiv>
        </main>
    )
}
