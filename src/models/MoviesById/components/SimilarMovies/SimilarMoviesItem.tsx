import cl from './SimilarMovies.module.scss'

import { FC } from 'react'
import { IMoviesSimilar } from '../../../../types/IMovies'
import { calcRating } from 'helpers/calcRating'
import { Poster } from 'components/Poster/Poster'

interface SimilarMoviesItemProps {
	item: IMoviesSimilar
}

export const SimilarMoviesItem: FC<SimilarMoviesItemProps> = ({ item }) => {
	const ratingColor = calcRating(item.rating)

	return (
		<>
			<Poster
				id={item.id}
				right='2rem'
				url={item.poster.url}
				name={item.name}
				rating={item.rating}
				ratingColor={ratingColor}
				height='100%'
				width='100%'
			/>
		</>
	)
}
