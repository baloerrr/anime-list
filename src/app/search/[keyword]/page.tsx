import React, { useEffect, useState } from 'react';
import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/header';

interface queryParams {
  params: {
    keyword: string;
  };
}

interface Anime {
  // Define the structure of your anime object
  // Example:
  id: number;
  title: string;
  // Add other properties as needed
}

export default function Page({ params }: queryParams) {
  const { keyword } = params;
  const [loading, setLoading] = useState(true);
  const [searchAnime, setSearchAnime] = useState<Anime[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const searchData: Anime[] = await response.json();
        setSearchAnime(searchData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error, show an error message, or redirect to an error page
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [keyword]);

  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${keyword}...`} linkHref='' linkTitle='' />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <AnimeList api={searchAnime} />
        )}
      </section>
    </>
  );
}
