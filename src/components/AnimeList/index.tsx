import Image from 'next/image'
import Link from 'next/link'

interface AnimeListProps {
  id: number
  title: string
  images: string
}

export default function AnimeList({ id, title, images }: AnimeListProps) {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image
        src={images}
        className="w-full max-h64 object-cover"
        alt=""
        width={350}
        height={350}
      />
      <h1 className="font-bold md:text-xl text-md p-4">{title}</h1>
    </Link>
  )
}
