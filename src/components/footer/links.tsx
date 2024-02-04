import { ReactNode } from "react"

interface Props {
    title: string
    children: ReactNode
}
export default function Links({ title, children }: Props) {
    return (
        <div className="flex-1 space-y-2 min-w-20 max-w-32 text-sm">
            <h3 className="font-bold text-base">{title}</h3>
            {children}
        </div>
    )
}
