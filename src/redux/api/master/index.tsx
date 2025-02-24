import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getMaster: build.query<MASTER.GetResponse, MASTER.GetRequest>({
      query: () => ({
        url: "/master/get-all",
        method: "GET",
      }),
      providesTags: ["master"],
    }),
    getShave: build.query<SHAVE.GetResponse, SHAVE.GetRequest>({
      query: () => ({
        url: "/shave",
        method: "GET",
      }),
      providesTags: ["shave"],
    }),
    getWatch: build.query<WATCH.GetResponse, WATCH.GetRequest>({
      query: () => ({
        url: "/watch/get-all",
        method: "GET",
      }),
      providesTags: ["watch"],
    }),
  }),
});

export const { useGetMasterQuery, useGetShaveQuery, useGetWatchQuery } = api;
