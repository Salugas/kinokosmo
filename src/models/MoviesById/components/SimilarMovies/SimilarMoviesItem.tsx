import { FC } from 'react'
import { IMoviesSimilar } from '../../../../types/IMovies'
import { Poster } from 'components/Poster/Poster'

interface SimilarMoviesItemProps {
	item: IMoviesSimilar
}

export const SimilarMoviesItem: FC<SimilarMoviesItemProps> = ({ item }) => {
	return (
		<>
			<Poster
				id={item.id}
				right='2rem'
				url={item.poster.url}
				name={item.name}
				height='100%'
				width='100%'
			/>
		</>
	)
}
