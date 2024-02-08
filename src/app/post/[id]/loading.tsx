import Divider from "@/components/divider"

export default function Loading() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-4 items-center">
                <div className="bg-red-600 h-6 w-20 animate-pulse" />
                <div className="bg-slate-600 h-12 w-full max-w-sm animate-pulse" />
                <div className="bg-slate-600 h-10 w-full max-w-xs animate-pulse" />
                <div className="flex flex-wrap justify-center gap-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div
                            key={i}
                            className="text-white bg-slate-300 border-1 h-6 w-20 rounded-full animate-pulse"
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <div className="bg-slate-600 h-6 w-full max-w-xs animate-pulse" />
            </div>
            <div className="flex items-start gap-8 sm:gap-16 flex-wrap sm:flex-nowrap">
                <div className="space-y-8 flex-1">
                    <article className="space-y-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div
                                key={i}
                                className="bg-slate-600 h-24 animate-pulse rounded-sm"
                            />
                        ))}
                    </article>
                    <div className="space-y-2">
                        <Divider />
                        <div className="flex justify-end">
                            <div className="bg-slate-600 h-6 w-full max-w-xs animate-pulse" />
                        </div>
                    </div>
                </div>
                <div className="hidden md:block w-60 lg:w-80 sticky top-4">
                    <h3 className="font-semibold text-xl">Table of Contents</h3>
                    <Divider className="mb-2" />
                    <div className="space-y-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div
                                key={i}
                                className="bg-slate-600 h-6 animate-pulse rounded-sm"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
