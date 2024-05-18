import React, { useEffect, useState } from "react";
import AniList from "../services/api-client";

export interface Anime {
  id: number;
  title: string;
  coverImage: string;
  description: string;
  rating: number;
}

const useFetchAnime = () => {
  const [animeArray, setAnimeArray] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchAnime(page: number, perPage: number) {
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
    }

    fetchAnime(1, 100).then((res) => {
      if (res) {
        const formattedAnime = res.Page.media.map((anime: any) => ({
          id: anime.id,
          title: anime.title.english || anime.title.romaji,
          coverImage: anime.coverImage.extraLarge,
          description: anime.description,
          rating: anime.averageScore,
        }));
        setLoading(false);
        setAnimeArray(formattedAnime);
      } else {
        console.error("Data load failed.");
      }
    });
  }, []);

  return { animeArray, loading };
};

export default useFetchAnime;
