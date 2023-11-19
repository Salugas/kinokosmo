import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ImagesUrlState {
	imagesUrl: string
}

const initialState: ImagesUrlState = {
	imagesUrl: ''
}

export const handleVisbleImages = createSlice({
	name: 'imagesUrl',
	initialState,
	reducers: {
		setImagesUrl(state, action: PayloadAction<string>) {
			state.imagesUrl = action.payload
		}
	}
})

export const { setImagesUrl } = handleVisbleImages.actions

export const imagesUrlReducer = handleVisbleImages.reducer
