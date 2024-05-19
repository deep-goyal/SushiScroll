import React, { useEffect, useState } from "react";
import AniList from "../services/api-client";

const useGenres = () => {
  const [genres, setGenres] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchGenres() {
      const query = `
        query {
          GenreCollection
        }
      `;

      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      try {
        const response = await AniList.post("", { query }, { headers });

        if (response.status !== 200) {
          console.error(
            "API response error",
            response.status,
            response.statusText
          );
          return;
        }

        const data = response.data.data;
        setGenres(data.GenreCollection);
        setLoading(false);
      } catch (error) {
        console.error("Fetch genre failed", error);
      }
    }
    setLoading(true);
    fetchGenres();
  }, []);

  return { genres, isLoading };
};

export default useGenres;
