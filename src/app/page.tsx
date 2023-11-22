import AnimeList from '@/components/AnimeList'
import Header from '@/components/AnimeList/header'
import getAnimeResponse from './libs/api-libs';

export default async function Home() {
  const response: any = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`,
  )
  const topAnime = await response.json()

  getAnimeResponse("top/anime", "limit=10")

  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  )
}
