import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, API_URL } from '../../../contants/api'
import { IMovies } from 'types/IMovies'
import { IFilters } from '../types/IFilters'
import { IData } from 'types/IData'

export const MoviesByFilterAPI = createApi({
	reducerPath: 'MoviesByFilterAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	endpoints: build => ({
		fetchMoviesByFilter: build.query<IMovies[], unknown>({
			query: ({ filters, type, limit }) => ({
				url: `v1.3/movie?
			poster.url=!null&type=${filters.genre == 'anime' ? 'anime' : type}&year=${
					filters.year
				}&rating.kp=${filters.rating}&${
					filters.genre == '' ? '' : `genres.name=${filters.genre}`
				}&sortType=rating.kp&limit=${limit}`,
				headers: {
					'X-API-KEY': API_KEY
				}
			})
		})
	})
})
