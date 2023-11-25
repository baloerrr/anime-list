'use client'


import AnimeList from '@/components/AnimeList'
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'

import { useEffect, useState } from 'react'
import getAnimeResponse from '../libs/api-libs'

export default function Page() {
  const [page, setPage] = useState<number>(1)
  const [topAnime, setTopAnime] = useState<any>([])

  const fetchData = async () => {
    const response: any = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`,
    )
    const data = await response.json()
    setTopAnime(data)
  }

  console.log(getAnimeResponse("top/anime", `page=${page}`))
  console.log(topAnime);
  

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={topAnime.pagination?.last_visible_page}
      />
    </>
  )
}
