'use client'

import { MagnifyingGlass } from '@phosphor-icons/react'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function InputSearch() {
  const searchRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let keyword = searchRef.current?.value

    if(!keyword) return 
    router.push(`/search/${keyword}`)
  }

  return (
    <form className="relative" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Cari anime...."
        className="w-full p-2 rounded"
        ref={searchRef}
      />
      <button type='submit' className="absolute top-2 end-2">
        <MagnifyingGlass size={24} />
      </button>
    </form>
  )
}
