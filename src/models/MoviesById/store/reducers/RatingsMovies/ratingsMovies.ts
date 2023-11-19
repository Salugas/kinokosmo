import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

interface rating {
	id: number
	rating: number
}

interface ratingsMoviesState {
	allDelileredRating: rating | any
	ratingMoviesId: number | null
	selectedRating: number | null
	isAvailabilityRating: boolean
	isChangeRatingMode: boolean
	isVisbleRatings: boolean
	isWarning: boolean
	isLoading: boolean
	warning: string
}

const initialState: ratingsMoviesState = {
	allDelileredRating: {} as rating,
	ratingMoviesId: null,
	selectedRating: null,
	isVisbleRatings: false,
	isAvailabilityRating: false,
	isLoading: false,
	isWarning: false,
	isChangeRatingMode: false,
	warning: ''
}

export const ratingsMovies = createSlice({
	name: 'ratingsMovies',
	initialState,
	reducers: {
		setWarningRatingsMovies(state, action: PayloadAction<string>) {
			state.warning = action.payload
		},
		setVisvleRatingsMovies(state, action: PayloadAction<boolean>) {
			state.isVisbleRatings = action.payload
		},
		setRatingSelection(state, action: PayloadAction<number>) {
			state.selectedRating = action.payload
		},
		setMovieIdSelection(state, action: PayloadAction<number>) {
			state.ratingMoviesId = action.payload
		},
		setRemoveSelectionRating(state) {
			state.selectedRating = null
		},
		setAddRatingsMovies(state) {
			let id: number | null = state.ratingMoviesId
			function addRating() {
				const map = produce(state.allDelileredRating, (draftState: any) => {
					draftState[`${id}`] = state.selectedRating
				})
				state.allDelileredRating = map
			}
			if (id) {
				if (
					state.allDelileredRating[id] &&
					state.isChangeRatingMode === false
				) {
				} else if (state.isChangeRatingMode) {
					addRating()
				} else {
					addRating()
				}

				let size = Object.keys(state.allDelileredRating).length
				size == 0 && addRating()
			}
		},
		setChangeRatingMode(state, action: PayloadAction<boolean>) {
			state.isChangeRatingMode = action.payload
		}
	}
})

export const {
	setWarningRatingsMovies,
	setVisvleRatingsMovies,
	setAddRatingsMovies,
	setRatingSelection,
	setMovieIdSelection,
	setChangeRatingMode,
	setRemoveSelectionRating
} = ratingsMovies.actions

export const ratingsMoviesReducer = ratingsMovies.reducer
