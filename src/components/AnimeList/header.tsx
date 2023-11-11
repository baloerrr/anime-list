import Link from "next/link";

interface AnimeListHeader {
    title: string,
    linkHref: string,
    linkTitle: string
}

export default function Header({title, linkHref, linkTitle} :AnimeListHeader) {
    return (
        <div className='flex justify-between p-4 '>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <Link href={linkHref} className='md:text-xl text-md underline hover:text-indigo-500 transition-all'>{linkTitle}</Link>
      </div>
    )
}