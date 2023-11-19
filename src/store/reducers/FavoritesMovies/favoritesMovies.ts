import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMovies } from 'types/IMovies'

interface favoritesMoviesState {
	favoritesMovies: IMovies[] | undefined
	id: number[]
	isWarning: string
}

const initialState: favoritesMoviesState = {
	favoritesMovies: [],
	id: [],
	isWarning: ''
}

export const favoritesMovies = createSlice({
	name: 'favoritesMovies',
	initialState,
	reducers: {
		setAddFavoritesMovies: (state, action: PayloadAction<IMovies>) => {
			if (state.id?.includes(action.payload.id)) {
				state.id = state.id.filter(item => item !== action.payload.id)
				state.favoritesMovies = state.favoritesMovies?.filter(
					item => item.id !== action.payload.id
				)
			} else {
				state.id.push(action.payload.id)
				state.favoritesMovies?.push(action.payload)
			}
		},
		setWarningFavoritesMovies: (state, action: PayloadAction<string>) => {
			state.isWarning = action.payload
		}
	}
})

export const { setAddFavoritesMovies, setWarningFavoritesMovies } =
	favoritesMovies.actions

export const favoritesMoviesReducer = favoritesMovies.reducer
