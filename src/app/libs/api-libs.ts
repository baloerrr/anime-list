export default async function getAnimeResponse(resource : string, query : string) {
    const response : any = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}

