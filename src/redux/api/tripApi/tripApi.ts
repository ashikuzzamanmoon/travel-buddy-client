// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi } from "../baseApi";

// Define a service using a base URL and expected endpoints
export const tripApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTrip: builder.mutation({
      query: (data) => {
        return {
          url: "/trips",
          method: "POST",
          data: data,
        };
      },
    }),
    getAllTrip: builder.query({
      query: () => {
        return {
          url: "/trips",
          method: "GET",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreateTripMutation, useGetAllTripQuery } = tripApi;
