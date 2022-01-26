import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api/users'
    }),
    endpoints: (builder)=>({
        getUser: builder.query({
            query: ()=> `users`,
        })
    })
});

export const {useGetUsersQuery} = userApi;

