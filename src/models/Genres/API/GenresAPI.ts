import { API_KEY, API_URL } from '../../../contants/api'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const GenresAPI = createApi({
	reducerPath: 'GenresAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	endpoints: build => ({
		fetchGenres: build.query<any, unknown>({
			query: () => ({
				url: `v1/movie/possible-values-by-field?field=genres.name`,
				headers: {
					'X-API-KEY': API_KEY
				}
			})
		})
	})
})
