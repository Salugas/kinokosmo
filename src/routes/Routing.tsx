import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import { Layout } from '../components/Layout/Layout'
import { FavoritesPage } from 'page/FavoritesPage/FavoritesPage'

const MainPage = lazy(() => import('../page/MainPage/MainPage'))
const FilterPage = lazy(() => import('../page/FilterPage/FilterPage'))

const MoviesByIdPage = lazy(
	() => import('../page/MoviesByIdPage/MoviesByIdPage')
)
const PersonsByIdPage = lazy(
	() => import('../page/PersonsByIdPage/PersonsByIdPage')
)
const NotfoundPage = lazy(() => import('../page/NotfoundPage/NotfoundPage'))

export const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<MainPage />} />
				<Route path='movies/:id' element={<MoviesByIdPage />} />
				<Route path='persons/:id' element={<PersonsByIdPage />} />

				<Route path='favorites' element={<FavoritesPage />}></Route>

				<Route path=':type' element={<FilterPage />} />

				<Route path='*' element={<NotfoundPage />} />
			</Route>
		</Routes>
	)
}
