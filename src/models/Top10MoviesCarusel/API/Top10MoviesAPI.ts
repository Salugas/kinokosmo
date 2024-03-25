import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, API_URL } from '../../../contants/api'
import { IMovies } from 'types/IMovies'

export const Top10MoviesAPI = createApi({
	reducerPath: 'Top10Movies',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	endpoints: build => ({
		fetchTop10Movies: build.query<IMovies, unknown>({
			query: () => ({
				url: `v1.3/movie?selectFields=backdrop name year genres id rating.kp&top250=!null`,
				headers: {
					'X-API-KEY': API_KEY
				}
			})
		})
	})
})
