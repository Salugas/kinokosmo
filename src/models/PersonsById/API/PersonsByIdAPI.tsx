import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, API_URL } from '../../../contants/api'
import { IPerson } from '../../../types/IPerson'
import { IMages } from 'types/IMages'
import { IMovies } from 'types/IMovies'

export const PersonsByIdAPI = createApi({
	reducerPath: 'PersonsByIdAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	endpoints: build => ({
		fetchPersonsById: build.query<IPerson, unknown>({
			query: id => ({
				url: `v1/person/${id}`,
				headers: {
					'X-API-KEY': API_KEY
				}
			})
		}),
		fetchPersonsImagesMovies: build.query<IMovies, unknown>({
			query: id => ({
				url: `v1.3/movie/${id}`,
				headers: {
					'X-API-KEY': API_KEY
				}
			})
		})
	})
})
