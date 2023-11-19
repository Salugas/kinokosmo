import { Poster } from 'components/Poster/Poster'
import cl from './Movies.module.scss'

import { FC } from 'react'
import { IMovies } from 'types/IMovies'
import { calcRating } from 'helpers/calcRating'

interface MoviesItemProps {
	item: IMovies
}

export const MoviesItem: FC<MoviesItemProps> = ({ item }) => {
	const ratingColor = calcRating(item.rating.kp)

	return (
		<>
			<Poster
				id={item.id}
				height='100%'
				right='2rem'
				url={item.poster.url}
				name={item.name}
				ageRating={item.ageRating}
				year={item.year}
				rating={item.rating.kp}
				ratingColor={ratingColor}
			/>
		</>
	)
}
