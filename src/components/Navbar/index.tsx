import Link from 'next/link'

export default function Navbar() {
  return (
    <header className='bg-purple-600'>
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/" className='font-bold text-white text-2xl'>BaloerAnime</Link>
      </div>
    </header>
  )
}
