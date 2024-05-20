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

const useFetchAnime = (selectedGenre: string) => {
  const [animeArray, setAnimeArray] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    const fetchAnime = async (page: number, perPage: number) => {
      setLoading(true);
      const query = `
        query ($page: Int, $perPage: Int) {
          Page(page: $page, perPage: $perPage) {
            media(sort: POPULARITY_DESC, type: ANIME) {
              id
              title {
                romaji
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

        const filteredAnime = selectedGenre
          ? formattedAnime.filter((anime: any) =>
              anime.genres.includes(selectedGenre)
            )
          : formattedAnime;

        setAnimeArray((prev) => [...prev, ...filteredAnime]);
        setHasNextPage(page < res.Page.pageInfo.lastPage);
      } else {
        console.error("Data load failed.");
      }
      setLoading(false);
    });
  }, [page, selectedGenre]);

  const loadMore = () => {
    if (!loading && hasNextPage) {
      setPage((prev) => prev + 1);
    }
  };

  return { animeArray, loading, loadMore, hasNextPage };
};

export default useFetchAnime;
