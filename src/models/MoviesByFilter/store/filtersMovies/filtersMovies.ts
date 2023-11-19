import { IFilters } from '../../types/IFilters'
import { currentYear } from 'helpers/currentYear'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FiltersMoviesState {
	filters: IFilters
}

const initialState: FiltersMoviesState = {
	filters: {
		rating: '1-10',
		year: `0-${currentYear()}`,
		genre: ''
	}
}

export const filtersMovies = createSlice({
	name: 'filtersMovies',
	initialState,
	reducers: {
		setFilterRatings: (state, action: PayloadAction<string>) => {
			state.filters.rating = action.payload
		},

		setFiterYears: (state, action: PayloadAction<string>) => {
			state.filters.year = action.payload
		},

		setFilterGenre: (state, action: PayloadAction<string>) => {
			state.filters.genre = action.payload
		},

		setResetFilters: state => {
			state.filters = initialState.filters
		}
	}
})

export const {
	setFilterRatings,
	setFiterYears,
	setFilterGenre,
	setResetFilters
} = filtersMovies.actions

export const filtersMoviesReducer = filtersMovies.reducer
