import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITV, IFilm } from "../models/Interfaces";
const URL = "https://api.themoviedb.org/3";
const API = process.env.API_KEY;

export const MediaAPI = createApi({
    reducerPath: "MediaAPI",
    tagTypes: ["Films", "TVShows"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
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
            })
        }),
    }),
});


