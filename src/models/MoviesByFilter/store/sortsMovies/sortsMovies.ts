import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISort } from '../../types/IFilters'

interface sortMoviesState {
	sort: ISort
}

const initialState: sortMoviesState = {
	sort: {
		rating: null,
		year: null
	}
}

export const sortMovies = createSlice({
	name: 'sortMovies',
	initialState,
	reducers: {
		setSortRating: (state, action: PayloadAction<number>) => {
			state.sort.rating = action.payload
		},
		setSortYear: (state, action: PayloadAction<number>) => {
			state.sort.year = action.payload
		}
	}
})

export const { setSortRating, setSortYear } = sortMovies.actions

export const sortMoviesReducer = sortMovies.reducer
