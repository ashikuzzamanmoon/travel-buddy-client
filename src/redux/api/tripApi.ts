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
    updateTrip: builder.mutation({
      query: (data) => {
        return {
          url: `/edit-trip/${data?.tripId}`,
          method: "PATCH",
          data: data?.payload,
        };
      },
      invalidatesTags: [tagTypes.trip],
    }),
    getAllTrip: builder.query({
      query: (args) => {
        return {
          url: "/trips",
          method: "GET",
          params: args,
        };
      },
      providesTags: [tagTypes.trip],
    }),
    getTripsByUser: builder.query({
      query: () => {
        return {
          url: "/users/trips",
          method: "GET",
        };
      },
      providesTags: [tagTypes.trip],
    }),
    getTripById: builder.query({
      query: (id: string | undefined) => {
        return {
          url: `/single-trip/${id}`,
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

    sendBuddyRequest: builder.mutation({
      query: (data: any) => {
        console.log(data);
        return {
          url: `/trip/${data?.tripId}/request`,
          method: "POST",
          data: { userId: data?.userId },
        };
      },
      invalidatesTags: [tagTypes.travelBuddy],
    }),
    responseBuddyRequest: builder.mutation({
      query: (data: any) => {
        return {
          url: `/buddy/${data?.id}/respond`,
          method: "PUT",
          data: data,
        };
      },
      invalidatesTags: [tagTypes.travelBuddy],
    }),
    getRequestByUser: builder.query({
      query: () => {
        return {
          url: "/requests",
          method: "GET",
        };
      },
      providesTags: [tagTypes.travelBuddy],
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
  useSendBuddyRequestMutation,
  useUpdateTripMutation,
  useGetTripByIdQuery,
  useGetRequestByUserQuery,
  useResponseBuddyRequestMutation,
} = tripApi;
