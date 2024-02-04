declare interface PostMeta {
    id: string
    title: string
    summary: string
    tags: string[]
    category: string
    date: Date
    updated: Date
}

declare interface Post {
    meta: PostMeta
    content: any
}
