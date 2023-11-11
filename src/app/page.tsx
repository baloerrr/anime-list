import AnimeList from '@/components/AnimeList'
import Link from 'next/link'

export default async function Home() {
  const response: any = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`,
  )
  const topAnime = await response.json()

  return (
    <div>
      <div className='flex justify-between p-4 '>
        <h1 className='text-2xl font-bold'>BaloerAnimeList</h1>
        <Link href="/populer" className='md:text-xl text-md underline hover:text-indigo-500 transition-all'>Lihat semua</Link>
      </div>
      <AnimeList api={topAnime} />
    </div>
  )
}

// {anime.data.map((data: any) => {
//   return (
//     <div key={data.mal_id}>
//       <AnimeList
//         id={data.mal_id}
//         title={data.title}
//         images={data.images.webp.image_url}
//       />
//     </div>
//   )
// })}