import React, { useEffect, useState } from "react";
import AniList from "../services/api-client";

const AnimeGrid = () => {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    async function getAnime(querysearch: string) {
      const query = `
        query ($page: Int, $perPage: Int, $search: String) {
          Page(page: $page, perPage: $perPage) {
            pageInfo {
              total
              perPage
            }
            media(search: $search, type: ANIME, sort: FAVOURITES_DESC) {
              id
              title {
                romaji
              }
              type
              genres
            }
          }
        }
      `;

      let variables = {
        search: querysearch,
        page: 1,
        perPage: 3,
      };

      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      const response = await AniList.post(
        "",
        { query, variables },
        { headers }
      );
      return response.data;
    }

    getAnime("Naruto").then((data) => {
      setData(data.data.Page.media[0].title.romaji);
      const titles = data.data.Page.media
        .map((anime: any) => anime.title.romaji)
        .join(", ");
      setData(titles);
    });
  }, []);

  return <p>{data}</p>;
};

export default AnimeGrid;
