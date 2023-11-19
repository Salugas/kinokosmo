import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface VisbleModalState {
	visbleSearch: boolean
	visbleRigistration: boolean
	visbleImages: boolean
	visbleMobileNavigation: boolean
}

const initialState: VisbleModalState = {
	visbleMobileNavigation: false,
	visbleRigistration: false,
	visbleImages: false,
	visbleSearch: false
}

export const visbleModal = createSlice({
	name: 'visbleModal',
	initialState,
	reducers: {
		setVisbleSearchModal: (state, action: PayloadAction<boolean>) => {
			state.visbleSearch = action.payload
		},
		setVisbleRegistrationModal: (state, action: PayloadAction<boolean>) => {
			state.visbleRigistration = action.payload
		},
		setVisbleImages: (state, action: PayloadAction<boolean>) => {
			state.visbleImages = action.payload
		},
		setVisbleMobileNavigation: (state, action: PayloadAction<boolean>) => {
			state.visbleMobileNavigation = action.payload
		}
	}
})

export const {
	setVisbleRegistrationModal,
	setVisbleMobileNavigation,
	setVisbleSearchModal,
	setVisbleImages
} = visbleModal.actions

export const visbleModalReducer = visbleModal.reducer
