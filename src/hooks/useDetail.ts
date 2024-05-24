import { useEffect, useState } from "react";
import AniList from "../services/api-client";
import { Anime } from "./useFetchAnime";
import { useParams } from "react-router-dom";

const useDetail = () => {
  const [anime, setAnime] = useState<Anime>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      const query = `
            query ($id: Int) {
              Media(id: $id, type: ANIME) {
                id
                title {
                  romaji
                  english
                }
                coverImage {
                  extraLarge
                }
                bannerImage
                description
                averageScore
                genres
                trailer {
                  id
                  site
                }
              }
            }
          `;
      const variables = { id: parseInt(id!) };
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
        if (response.status === 200) {
          const data = response.data.data.Media;
          setAnime({
            id: data.id,
            title: data.title.english || data.title.romaji,
            coverImage: data.coverImage.extraLarge,
            bannerImage: data.bannerImage || "",
            description: data.description,
            rating: data.averageScore,
            genres: data.genres,
            trailerid: data.trailer?.id || "",
            platform: data.trailer?.site || "",
          });
        } else {
          console.error(
            "API response error:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Failed to fetch anime details:", error);
      }
    };

    fetchAnimeDetails();
  }, [id]);

  return anime;
};

export default useDetail;
