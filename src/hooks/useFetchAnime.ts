import { useEffect, useState } from "react";
import AniList from "../services/api-client";

export interface Anime {
  id: number;
  title: string;
  coverImage: string;
  bannerImage: string;
  description: string;
  rating: number;
  genres: string[];
}

interface Props {
  selectedGenre: string;
  sortOrder: string;
}

const useFetchAnime = ({ selectedGenre, sortOrder }: Props) => {
  const [animeArray, setAnimeArray] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    setAnimeArray([]);
    setPage(1);
    setHasNextPage(true);
  }, [selectedGenre, sortOrder]);

  useEffect(() => {
    const fetchAnime = async (page: number, perPage: number) => {
      setLoading(true);
      const query = `
        query ($page: Int, $perPage: Int, $genre: String, $sortOrder: MediaSort) {
          Page(page: $page, perPage: $perPage) {
            media(sort: [$sortOrder], type: ANIME, genre_in: [$genre]) {
              id
              title {
                romaji
                english
              }
              coverImage {
                extraLarge
              }
              description
              averageScore
              genres
            }
            pageInfo {
              currentPage
              lastPage
            }
          }
        }
      `;

      const variables = {
        page: page,
        perPage: perPage,
        genre: selectedGenre,
        sortOrder: sortOrder,
      };

      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      try {
        const response = await AniList.post(
          "",
          { query, variables },
          { headers }
        );
        if (response.status !== 200) {
          console.error(
            "API response error:",
            response.status,
            response.statusText
          );
          return null;
        }
        return response.data.data;
      } catch (error) {
        console.error("Failed to fetch anime data:", error);
        return null;
      }
    };

    fetchAnime(page, 20).then((res) => {
      if (res) {
        const formattedAnime = res.Page.media.map((anime: any) => ({
          id: anime.id,
          title: anime.title.english || anime.title.romaji,
          coverImage: anime.coverImage.extraLarge,
          description: anime.description,
          bannerImage: anime.bannerImage,
          rating: anime.averageScore,
          genres: anime.genres,
        }));

        setAnimeArray((prev) =>
          page === 1 ? formattedAnime : [...prev, ...formattedAnime]
        );
        setHasNextPage(page < res.Page.pageInfo.lastPage);
      } else {
        console.error("Data load failed.");
      }
      setLoading(false);
    });
  }, [page, selectedGenre, sortOrder]);

  const loadMore = () => {
    if (!loading && hasNextPage) {
      setPage((prev) => prev + 1);
    }
  };

  return { animeArray, loading, loadMore, hasNextPage };
};

export default useFetchAnime;
