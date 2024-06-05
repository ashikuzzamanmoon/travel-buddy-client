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
    getAllUser: build.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    getUserById: build.query({
      query: (userId: string | undefined) => ({
        url: `/user/${userId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),

    editProfile: build.mutation({
      query: (data: any) => {
        return {
          url: `/profile`,
          method: "PUT",
          data: data,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
    changePassword: build.mutation({
      query: (data: any) => {
        // console.log(data);
        return {
          url: `/change-password`,
          method: "POST",
          data: data,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
    updateRole: build.mutation({
      query: (data: any) => {
        // console.log(data);
        return {
          url: `/update-role/${data?.userId}`,
          method: "PATCH",
          data: data?.payload,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
    updateStatus: build.mutation({
      query: (data: any) => {
        // console.log(data);
        return {
          url: `/update-status/${data?.userId}`,
          method: "PATCH",
          data: data?.payload,
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetUserQuery,
  useEditProfileMutation,
  useGetUserByIdQuery,
  useGetAllUserQuery,
  useChangePasswordMutation,
  useUpdateRoleMutation,
  useUpdateStatusMutation,
} = userApi;
