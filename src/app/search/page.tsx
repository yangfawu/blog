import { getPostsMeta } from "@/db"
import Fuse from "fuse.js"
import { Suspense } from "react"
import Pagination from "./pagination"
import PaginationSkeleton from "./pagination-skeleton"
import Results from "./results"
import SearchBar from "./search-bar"

const PAGE_SIZE = 10

function search(data: PostMeta[], query: string) {
    const fuse = new Fuse(data, {
        keys: ["title", "tags", "summary", "category"],
    })
    return fuse.search(query).map(({ item }) => item)
}

interface Props {
    searchParams: {
        q?: string // query
        p?: string // page
    }
}
export default async function Page({ searchParams }: Props) {
    const metaList = await getPostsMeta()

    const query = (searchParams.q || "").trim()
    const results = query.length < 1 ? metaList : search(metaList, query)

    const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE))
    const page = Math.min(Math.max(Number(searchParams.p) || 1, 1), totalPages)

    const start = (page - 1) * PAGE_SIZE
    const end = start + PAGE_SIZE
    const slice = results.slice(start, end)

    return (
        <>
            <div className="max-w-screen-md mx-auto">
                <SearchBar defaultValue={query} />
            </div>
            <Results query={query} data={slice} />
            <Suspense fallback={<PaginationSkeleton />}>
                <Pagination current={page} total={totalPages} />
            </Suspense>
        </>
    )
}
