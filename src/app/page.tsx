import Link from "next/link"

export default function HomePage () {
    return (
    <>
        <Link href='/blog'>Blog</Link>
        <Link href='/products'>Product</Link>
        <h1>Homepage</h1>
    </>
)
}