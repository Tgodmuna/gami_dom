import { AxiosRequestConfig } from "axios";
import { methodType } from "./Types.ts";

import axios from "axios";

/**
 * Asynchronously calls an API endpoint with the specified parameters.
 *
 * @param apiEndpoint - The URL of the API endpoint to call.
 * @param method - The HTTP method to use for the API call (default is 'GET').
 * @param queryParams - An object containing any query parameters to include in the API call.
 * @param requestConfig - An optional object containing additional Axios request configuration options.
 * @returns A Promise that resolves to the data returned from the API call.
 */
export async function Call_API(
      apiEndpoint: string,
      method: methodType = "GET",
      queryParams = {},
      requestConfig: AxiosRequestConfig = {}
): Promise<any> {
      try {
            // Make the API call using Axios
            const response = await axios({
                  url: apiEndpoint,
                  method: method,
                  params: queryParams,
                  ...requestConfig,
            });

            console.log("Response:", response);
            // Extract and return the data from the response
            return response.data;
      } catch (error) {
            // Handle errors, you might want to log or throw the error
            console.error("Error fetching data:", error);
            throw error;
      }
}
