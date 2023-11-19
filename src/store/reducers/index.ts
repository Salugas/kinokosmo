import { combineReducers } from 'redux'

import { AuthReducer } from 'models/RegistrationForm'
import { ratingsMoviesReducer } from 'models/MoviesById'
import { paginatoinLimitReducer } from './PaginatoinLimit/PaginatoinLimit'
import { favoritesMoviesReducer } from './FavoritesMovies/favoritesMovies'
import { sortMoviesReducer } from 'models/MoviesByFilter'
import { imagesUrlReducer } from 'models/MoviesById'
import { filtersMoviesReducer } from 'models/MoviesByFilter'
import { MoviesSearchAPI } from 'models/ModalSeachMovie'
import { visbleModalReducer } from './VisbleModal/visbleModal'

import { PersonsByIdAPI } from 'models/PersonsById'
import { MoviesByIdAPI } from 'models/MoviesById'
import { Top10MoviesAPI } from 'models/Top10MoviesCarusel'
import { GenresAPI } from 'models/Genres'
import { GenresMoviesAPI } from 'models/GenresMovies/API/GenresMoviesAPI'
import { MoviesByFilterAPI } from 'models/MoviesByFilter'

export const rootReducer = combineReducers({
	AuthReducer,
	imagesUrlReducer,
	sortMoviesReducer,
	visbleModalReducer,
	filtersMoviesReducer,
	ratingsMoviesReducer,
	paginatoinLimitReducer,
	favoritesMoviesReducer,

	[GenresAPI.reducerPath]: GenresAPI.reducer,
	[MoviesByIdAPI.reducerPath]: MoviesByIdAPI.reducer,
	[PersonsByIdAPI.reducerPath]: PersonsByIdAPI.reducer,
	[Top10MoviesAPI.reducerPath]: Top10MoviesAPI.reducer,
	[GenresMoviesAPI.reducerPath]: GenresMoviesAPI.reducer,
	[MoviesSearchAPI.reducerPath]: MoviesSearchAPI.reducer,
	[MoviesByFilterAPI.reducerPath]: MoviesByFilterAPI.reducer
})

export type RootState = ReturnType<typeof rootReducer>
