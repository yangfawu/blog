import ErrorLayout from "@/components/error-layout"
import NextLinkButton from "@/components/next-link-button"
import Image from "next/image"

export default function Page() {
    return (
        <main className="flex-1">
            <ErrorLayout
                title="Page Not Found!"
                description="Sorry, the page you are looking for does not exist at the moment."
            >
                <Image
                    src="/not-found.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto max-w-lg rounded-md"
                    alt="https://unsplash.com/photos/person-using-white-and-gold-compass-iISyBKOT2D0"
                />
                <div className="flex">
                    {/* flex container needed to make gap apply correctly */}
                    <NextLinkButton href="/">Return to Home</NextLinkButton>
                </div>
            </ErrorLayout>
        </main>
    )
}
