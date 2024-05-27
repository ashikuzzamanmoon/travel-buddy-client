import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    editProfile: build.mutation({
      query: (data: any) => {
        console.log(data);
        return {
          url: `/profile`,
          method: "PUT",
          data: data.body,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetUserQuery, useEditProfileMutation } = userApi;
