import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3001/api",
})




export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['user', 'transaction'],
  endpoints: builder => ({})
})