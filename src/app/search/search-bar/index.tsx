import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import Input from "./input"

interface Props {
    defaultValue: string
}
export default function SearchBar({ defaultValue }: Props) {
    return (
        <div className="space-y-1">
            <p className="text-red-600 uppercase text-sm font-bold">search</p>
            <form method="get">
                <fieldset className="relative">
                    <Input
                        name="q"
                        type="search"
                        defaultValue={defaultValue}
                        placeholder="Search posts..."
                    />
                    <p className="absolute h-6 w-6 top-1/2 left-7 -translate-x-1/2 -translate-y-1/2">
                        <MagnifyingGlassIcon />
                    </p>
                </fieldset>
                <p id="search-hint" className="text-sm px-2 pt-1">
                    Press <kbd>Enter</kbd> to confirm new search.
                </p>
            </form>
        </div>
    )
}
