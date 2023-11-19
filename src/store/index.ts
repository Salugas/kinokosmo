import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'

import { MoviesSearchAPI } from 'models/ModalSeachMovie'
import { MoviesByIdAPI } from 'models/MoviesById'
import { PersonsByIdAPI } from 'models/PersonsById'
import { Top10MoviesAPI } from 'models/Top10MoviesCarusel'
import { GenresAPI } from 'models/Genres'
import { GenresMoviesAPI } from 'models/GenresMovies/API/GenresMoviesAPI'
import { MoviesByFilterAPI } from 'models/MoviesByFilter'

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(
				MoviesByFilterAPI.middleware,
				GenresMoviesAPI.middleware,
				GenresAPI.middleware,
				Top10MoviesAPI.middleware,
				MoviesSearchAPI.middleware,
				MoviesByIdAPI.middleware,
				PersonsByIdAPI.middleware
			)
	})
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
