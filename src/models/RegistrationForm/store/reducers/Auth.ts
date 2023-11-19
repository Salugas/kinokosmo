import { user } from '../../data/user'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from 'models/RegistrationForm/types/IUser'

interface AuthState {
	setUser: IUser
	isError: string
	isAuth: boolean
	isLoading: boolean
}

const initialState: AuthState = {
	setUser: {} as IUser,
	isError: '',
	isAuth: false,
	isLoading: false
}

export const Auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action: PayloadAction<IUser[]>) => {
			try {
				state.isLoading = true
				const mockUser = action.payload.find(
					item => item.name == user.name && item.email == user.email
				)
				if (mockUser) {
					state.isAuth = true

					localStorage.setItem('auth', 'true')
					localStorage.setItem('username', mockUser.name)

					state.setUser = mockUser
				}

				state.isLoading = false
			} catch (error) {
				state.isError = 'неправильный логин или пороль'
			}
		},
		setLogout: state => {
			state.isAuth = false
			localStorage.removeItem('auth')
			localStorage.removeItem('username')
			state.setUser = {} as IUser
		}
	}
})

export const { setAuth, setLogout } = Auth.actions

export const AuthReducer = Auth.reducer
