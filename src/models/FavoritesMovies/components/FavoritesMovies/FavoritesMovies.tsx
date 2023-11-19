import Container from 'components/Сontainer/Container'
import cl from './FavoritesMovies.module.scss'

import { useAppSelector } from 'hooks/redux'
import { MoviesList } from '../Movies/MoviesList'

export const FavoritesMovies = () => {
	const { favoritesMovies } = useAppSelector(
		state => state.favoritesMoviesReducer
	)

	return (
		<Container center>
			<div className={cl.wrapper}>
				<div className={cl.title}>{'избранное'}</div>
				<MoviesList movies={favoritesMovies} />
			</div>
		</Container>
	)
}
