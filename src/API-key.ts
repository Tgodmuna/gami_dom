export const key: string = "0991d21d843944df8b651d29d3375072";

/**
 * Generates the game endpoint URL based on an optional query object.
 *
 * @param query - An optional query object to include in the endpoint URL.
 * @returns The generated game endpoint URL.
 */
export const gameEndPoint = (query?: queryType | undefined) => {
      let endpoint: string = `https://api.rawg.io/api/games?key=${key}`;

      if (query) {
            return (endpoint += `?${query}=`);
      }
      return endpoint;
};
export type queryType =
      | "page"
      | "page_size"
      | "search"
      | "search_precise"
      | "search_exact"
      | "parent_platforms"
      | "platforms"
      | "stores"
      | "developers"
      | "publishers"
      | "genres"
      | "tags"
      | "creators"
      | "dates"
      | "updated"
      | "platforms_count"
      | "metacritic"
      | "exclude_collection"
      | "exclude_additions"
      | "exclude_parents"
      | "exclude_game_series"
      | "exclude_stores"
      | "ordering";
