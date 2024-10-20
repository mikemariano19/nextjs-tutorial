import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Next.js Tutorial - Codevolution",
    template: "%s | Codevolution"
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header
        style={{
          backgroundColor: "#FFD04C",
          padding: "1rem"
        }}
        >
          <h1>Header</h1>
        </header>
        {children}
        <footer
        style={{
          backgroundColor: "#FE6132",
          padding: "1rem"
        }}
        >
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  )
}