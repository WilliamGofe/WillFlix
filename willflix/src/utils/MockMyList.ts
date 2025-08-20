import { MediaItem } from "./types";

// Estado inicial mockado
export let initialList: MediaItem[] = [
    {
      adult: false,
      backdrop_path: "/25g7mthXoJFcNZhAKz0evk17Bsx.jpg",
      first_air_date: "2025-08-12",
      genre_ids: [10765, 18],
      id: 157239,
      media_type: "tv",
      name: "Alien: Earth",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Alien: Earth",
      overview:
        "Quando uma misteriosa nave espacial cai na Terra...",
      popularity: 330.0913,
      poster_path: "/kjHBX4U7Udje1W9OAfoJX2kcbh8.jpg",
      vote_average: 8.464,
      vote_count: 70
    },
    {
      adult: false,
      backdrop_path: "/zNriRTr0kWwyaXPzdg1EIxf0BWk.jpg",
      genre_ids: [878, 12, 28],
      id: 1234821,
      media_type: "movie",
      original_language: "en",
      original_title: "Jurassic World Rebirth",
      overview: "Cinco anos após os eventos de Jurassic World...",
      popularity: 939.9753,
      poster_path: "/zuEC2i3I2P7QIcLoUJNBwqRYO4S.jpg",
      release_date: "2025-07-01",
      title: "Jurassic World: Recomeço",
      video: false,
      vote_average: 6.4,
      vote_count: 1485
    },
    {
      adult: false,
      backdrop_path: "/qg8Gv2w0dDL8cMsG2QO2hWp58wy.jpg",
      first_air_date: "2022-11-23",
      genre_ids: [10765, 9648, 35],
      id: 119051,
      media_type: "tv",
      name: "Wandinha",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Wednesday",
      overview: "Inteligente, sarcástica e apática...",
      popularity: 804.0019,
      poster_path: "/ooBR3qulC40ws0QkYBUAYFKmLRE.jpg",
      vote_average: 8.409,
      vote_count: 9381
    }
  ];

export type { MediaItem };
  