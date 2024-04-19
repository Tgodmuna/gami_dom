import { ReactNode } from "react";

/**
 * Represents the type of a dropdown menu component.
 */
export type DropDownMenuType = {
      ClassName?: string;
      children: ReactNode;
      isDroped: boolean;
};

export type methodType = "GET" | "POST" | "PUT" | "DELETE";

/**
 * Represents the props for a game details component.
 */
export type GameDetailsProps = {
      name: string;
      genre: string;
      year: string;
};

//api game data
export type gameData = {
      id: number;
      slug: string;
      name: string;
      released: string;
      tba: boolean;
      background_image: string;
      rating: number;
      rating_top: number;
      ratings: {};
      ratings_count: number;
      reviews_text_count: string;
      added: number;
      added_by_status: {};
      metacritic: number;
      playtime: number;
      suggestions_count: number;
      updated: string;
      esrb_rating: EsrbRating;
      platforms: Platform[];
};

type EsrbRating = {
      id: number;
      slug: string;
      name: string;
};

type Platform = {
      platform: PlatformDetail;
      released_at: string;
      requirements: {
            minimum: string;
            recommended: string;
      };
};

type PlatformDetail = {
      id: number;
      slug: string;
      name: string;
};
