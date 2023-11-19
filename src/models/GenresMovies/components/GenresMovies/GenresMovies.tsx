import cl from './GenresMovies.module.scss'

import { MoviesList } from '../Movies/MoviesList'
import Container from 'components/Сontainer/Container'
import { genresData } from 'models/GenresMovies/data/genres'

export const GenresMovies = () => {
	const genres = genresData

	return (
		<Container left>
			<div className={cl.wrapper}>
				{genres.map(genre => (
					<MoviesList genre={genre} />
				))}
			</div>
		</Container>
	)
}
