import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, API_URL } from '../../../contants/api'
import { IMovies } from 'types/IMovies'

export const GenresMoviesAPI = createApi({
	reducerPath: 'GenresMoviesAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	endpoints: build => ({
		fetchGenresMovies: build.query<IMovies, unknown>({
			query: genre => ({
				url: `v1.3/movie?SortField=genres.name&genres.name=${genre}&limit=12`,
				headers: {
					'X-API-KEY': API_KEY
				}
			})
		})
	})
})
