import { API_KEY, API_URL } from '../../../contants/api'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMovies } from '../../../types/IMovies'
import { IMages } from './../../../types/IMages'

export const MoviesByIdAPI = createApi({
	reducerPath: 'MoviesByIdAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	endpoints: build => ({
		fetchMoviesById: build.query<IMovies, unknown>({
			query: id => ({
				url: `v1.3/movie/${id}`,
				headers: {
					'X-API-KEY': API_KEY
				}
			})
		}),

		fetchImagesById: build.query<IMages, unknown>({
			query: id => ({
				url: `v1/image?movieId=${id}`,
				headers: {
					'X-API-KEY': API_KEY
				}
			})
		})
	})
})
