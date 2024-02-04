export default function PaginationSkeleton() {
    return (
        <div className="flex items-center justify-center gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
                <div
                    key={i}
                    className="w-8 h-8 bg-white rounded-md animate-pulse"
                />
            ))}
        </div>
    )
}
