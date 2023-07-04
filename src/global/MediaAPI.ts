import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITV, ISearch, IFilm } from "../models/Interfaces";
const URL = "https://api.themoviedb.org/3";
const API = process.env.API_KEY;

export const MediaAPI = createApi({
    reducerPath: "MediaAPI",
    tagTypes: ["Films", "TVShows"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        search: builder.query<ISearch, string>({
            query: (info) => ({
                url: `/search/multi?query=${
                    info}&api_key=${API}`,
                method: "GET"
            }),
            providesTags: ["TVShows"]
        }),
        tv: builder.query<ITV, void>({
            query: () => ({
                url: `/trending/tv/week?api_key=${API}`,
                method: "GET"
            }),
            providesTags: ["TVShows"]
        }),
        film: builder.query<IFilm, void>({
            query: () => ({
                url: `/trending/movie/week?api_key=${API}`,
                method: "GET"
            }),
            providesTags: ["Films"]
        }),
    }),
});


