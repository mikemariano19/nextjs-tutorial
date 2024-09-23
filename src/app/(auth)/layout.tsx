"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import './styles.css'

const navLinks = [
  { name: 'Register', href:'/register' },
  { name: 'Login', href:'/login' },
  { name: 'Forgot Password', href:'/forgot-password' }
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname.endsWith(link.href)
        return (
          <Link href={link.href} key={link.name}
            className={isActive? 'font-bold mr-2' : 'text-blue-400 mr-2'}
          >
            {link.name}
          </Link>
        )
      })}
      {children}
    </>
  )
}
