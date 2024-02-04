"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { usePathname, useSearchParams } from "next/navigation"
import Button from "./button"

interface Props {
    current: number
    total: number
}
export default function Pagination({ current, total }: Props) {
    const params = useSearchParams()
    const pathname = usePathname()

    const move = (page: number) => {
        const search = new URLSearchParams(params)
        search.set("p", String(page))
        return `${pathname}?${search.toString()}`
    }

    return (
        <div className="flex items-center justify-center gap-4">
            <Button href={move(current - 1)} disabled={current == 1}>
                <ChevronLeftIcon className="w-4 h-4" />
            </Button>
            <p className="text-xs text-gray-900">
                {current} <span className="mx-0.25">/</span> {total}
            </p>
            <Button href={move(current + 1)} disabled={current == total}>
                <ChevronRightIcon className="w-4 h-4" />
            </Button>
        </div>
    )
}
