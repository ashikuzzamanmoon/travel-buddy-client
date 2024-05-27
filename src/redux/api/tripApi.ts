// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

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
      invalidatesTags: [tagTypes.trip],
    }),
    getAllTrip: builder.query({
      query: () => {
        return {
          url: "/trips",
          method: "GET",
        };
      },
      providesTags: [tagTypes.trip],
    }),
    getTripsByUser: builder.query({
      query: () => {
        return {
          url: "/user/trips",
          method: "GET",
        };
      },
      providesTags: [tagTypes.trip],
    }),
    deleteTrip: builder.mutation({
      query: (data: any) => {
        return {
          url: `/delete-trip/${data?.tripId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.trip],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateTripMutation,
  useGetAllTripQuery,
  useGetTripsByUserQuery,
  useDeleteTripMutation,
} = tripApi;
