import { MouseEventHandler } from "react";

export type ContainerType = {
   children: React.ReactNode
}

export type ButtonProps = {
   label: string;
   onClick: MouseEventHandler;
}

// API datas types
export type MovieType = {
   poster_path: string | undefined;
   adult: boolean;
   overview: string;
   release_date: string;
   genre_ids: number[];
   id: number;
   original_title: string;
   original_language: string;
   title: string;
   backdrop_path: string | null;
   popularity: number;
   vote_count: number;
   video: boolean;
   vote_average: number;
};

export type CryptoType = {
   ath: number;
   ath_change_percentage: number;
   ath_date: string;
   atl: number;
   atl_change_percentage: number;
   atl_date: string;
   circulating_supply: number;
   current_price: number;
   fully_diluted_valuation: number;
   high_24h: number;
   id: string;
   image: string;
   last_updated: string;
   low_24h: number;
   market_cap: number;
   market_cap_change_24h: number;
   market_cap_change_percentage_24h: number;
   market_cap_rank: number;
   max_supply: number;
   name: string;
   price_change_24h: number;
   price_change_percentage_24h: number;
   roi: any;
   symbol: string;
   total_supply: number;
   total_volume: number;
};

export type WeatherType = {
   location: string,
   temperature: number | null,
   condition: string
}

export type WeatherDataType = {
   city: string;
   temperature: number;
   icon: string;
}

export type ResponseType = {
   isLoading: boolean;
};

export type MovieDataType = {
   title: string;
   data: MovieType[];
}
export type MovieResponse = ResponseType & {
   movieDatas?: MovieType[],
   theaterDatas?: MovieType[]
}
export type CryptoResponse = ResponseType & {
   cryptoDatas?: CryptoType[]
}
export type WeatherResponse = ResponseType & {
   weatherDatas?: WeatherType
}