import AnimeList from '@/components/AnimeList'
import Header from '@/components/AnimeList/header'

interface queryParams {
  params: {
    keyword : string
  }
}

export default async function Page({params} : queryParams)  {
const { keyword } = params;
const decodeKeyword = decodeURI(keyword);
  const response: any = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`,
  )
  const seacrhAnime = await response.json()

  return (
    <>
      <section>
        <Header
          title={`Pencarian untuk ${decodeKeyword}...`}
          linkHref=''
          linkTitle=''
        />
        <AnimeList api={seacrhAnime} />
      </section>
    </>
  )
}