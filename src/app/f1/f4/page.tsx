import Link from "next/link";

export default function F4Page () {
    return (
    <>
        <h1>F4 Page</h1>
        <div>
            <Link href='/f1/f3'>F3</Link>
            <Link href='/f1/about'>About</Link>
        </div>
    </>
)
}