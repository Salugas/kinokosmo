import {
	setResetPaginatoinLimit,
	setCountPaginatoinLimit
} from './reducers/PaginatoinLimit/PaginatoinLimit'

import {
	setImagesUrl,
	setChangeRatingMode,
	setAddRatingsMovies,
	setVisvleRatingsMovies,
	setRatingSelection,
	setMovieIdSelection,
	setWarningRatingsMovies,
	setRemoveSelectionRating
} from 'models/MoviesById/index'

import {
	setVisbleRegistrationModal,
	setVisbleMobileNavigation,
	setVisbleSearchModal,
	setVisbleImages
} from './reducers/VisbleModal/visbleModal'

import { setAuth, setLogout } from 'models/RegistrationForm'

import {
	setAddFavoritesMovies,
	setWarningFavoritesMovies
} from './reducers/FavoritesMovies/favoritesMovies'
import {
	setFiterYears,
	setFilterRatings,
	setFilterGenre,
	setResetFilters,
	setSortYear,
	setSortRating
} from 'models/MoviesByFilter'

export const allActionCreators = {
	setWarningRatingsMovies,
	setVisvleRatingsMovies,
	setAddRatingsMovies,
	setChangeRatingMode,
	setMovieIdSelection,
	setRatingSelection,
	setRemoveSelectionRating,

	setWarningFavoritesMovies,
	setAddFavoritesMovies,

	setVisbleRegistrationModal,
	setVisbleMobileNavigation,
	setVisbleSearchModal,
	setVisbleImages,

	setFilterRatings,
	setResetFilters,
	setFilterGenre,
	setFiterYears,

	setSortYear,
	setSortRating,

	setAuth,
	setLogout,

	setResetPaginatoinLimit,
	setCountPaginatoinLimit,

	setImagesUrl
}
