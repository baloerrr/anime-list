import getAnimeResponse from "@/app/libs/api-libs"
import Image from "next/image";

interface AnimePageDetailProps {
    params: {
        id: string
    }
}

export default async function page({params: {id}}: AnimePageDetailProps) {
    
    const anime = await getAnimeResponse(`anime/${id}`, "");
    console.log(anime.data);
    
    return (
        <>
        <div className="pt-4 px-4">
            <h3 className="text-2xl text-color-primary">{anime.data.title} - {anime.data.year}</h3>
        </div>
        <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>PERINGKAT</h3>
                <p>{anime.data.rank}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>SKOR</h3>
                <p>{anime.data.score}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>ANGGOTA</h3>
                <p>{anime.data.members}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>EPISODE</h3>
                <p>{anime.data.episodes}</p>
            </div>
        </div>
        <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-3 text-color-primary">
            <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={250} height={250} className="w-full rounded object-cover" />
            <p className="text-justify text-xl">{anime.data.synopsis}</p>
        </div>
        </>
    )
}