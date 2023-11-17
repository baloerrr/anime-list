import AnimeList from '@/components/AnimeList'
import Header from '@/components/AnimeList/header'

interface queryParams {
  params: {
    keyword : String
  }
}

export default async function Page({params} : queryParams)  {
const { keyword } = params;
  const response: any = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`,
  )
  const seacrhAnime = await response.json()

  return (
    <>
      <section>
        <Header
          title={`Pencarian untuk ${keyword}...`}
          linkHref=''
          linkTitle=''
        />
        <AnimeList api={seacrhAnime} />
      </section>
    </>
  )
}