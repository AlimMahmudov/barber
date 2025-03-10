import {
  BaseQueryFn,
  fetchBaseQuery,
  createApi,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API}`,
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

export const api = createApi({
  baseQuery: baseQueryExtended,
  reducerPath: "api",
  refetchOnFocus: true,
  refetchOnReconnect: false,
  tagTypes: ["master", "shave", "watch", "video", "service"],
  endpoints: () => ({}),
});
