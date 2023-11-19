import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PaginatoinLimitState {
	limit: number
}

const initialState: PaginatoinLimitState = {
	limit: 15
}

export const paginatoinLimit = createSlice({
	name: 'paginatoinLimit',
	initialState,
	reducers: {
		setResetPaginatoinLimit: state => {
			state.limit = 15
		},
		setCountPaginatoinLimit: (state, action: PayloadAction<number>) => {
			state.limit += action.payload
		}
	}
})

export const { setResetPaginatoinLimit, setCountPaginatoinLimit } =
	paginatoinLimit.actions

export const paginatoinLimitReducer = paginatoinLimit.reducer
