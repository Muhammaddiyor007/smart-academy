import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <div className="text-2xl font-bold">SmartAcademy</div>
      <div className="space-x-6 text-lg">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  )
}