import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import Divider from "./divider"
import SnatchingDiv from "./snatching-div"

export default function Header() {
    return (
        <header>
            <SnatchingDiv className="flex gap-4 items-center justify-between">
                <div className="w-[30px] h-[30px] hidden md:block" />
                <div className="py-4">
                    <Link href="/" className="flex gap-4 items-center">
                        <Image
                            src="/logo.svg"
                            alt="Yangfa Wu"
                            width={0}
                            height={0}
                            className="w-auto h-12"
                        />
                        <p className="text-xl mx-auto font-thin text-nowrap">
                            Personal{" "}
                            <span className="text-red-600 font-normal">
                                Blog
                            </span>
                        </p>
                    </Link>
                </div>
                <div className="w-[30px] h-[30px] flex items-center justify-center">
                    <Link href="/search">
                        <MagnifyingGlassIcon className="w-[20px] h-[20px]" />
                    </Link>
                </div>
            </SnatchingDiv>
            <Divider />
        </header>
    )
}
