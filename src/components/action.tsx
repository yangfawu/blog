import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}
export default function Action({ children }: Props) {
    return (
        <div className="flex">
            <div className="flex gap-2 group items-center px-4 pl-0 py-2 hover:text-red-600">
                <div>
                    <ChevronRightIcon className="w-4 h-4" />
                </div>
                <div className="group-hover:font-semibold">{children}</div>
            </div>
        </div>
    )
}
