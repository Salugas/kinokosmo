import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, API_URL } from '../../../contants/api'
import { ISearch } from '../../../types/ISearch'
import { IBaseQuery } from '../../../types/IQuery'

export const MoviesSearchAPI = createApi({
	reducerPath: 'MoviesSearchAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	endpoints: build => ({
		fetchAllSearchMovies: build.query<ISearch[], IBaseQuery>({
			query: ({ query, limit }) => ({
				url: `v1.2/movie/search?query=${query}&limit=${limit}`,
				headers: {
					'X-API-KEY': API_KEY
				}
			})
		})
	})
})
