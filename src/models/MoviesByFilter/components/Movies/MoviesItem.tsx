import cl from './Movies.module.scss'

import { IMovies } from 'types/IMovies'
import React, { FC } from 'react'
import { Poster } from 'components/Poster/Poster'
import { calcRating } from 'helpers/calcRating'

interface MoviesItemProps {
	item: IMovies
}

export const MoviesItem: FC<MoviesItemProps> = ({ item }) => {
	const ratingColor = calcRating(item.rating.kp)

	return (
		<>
			<Poster
				ageRating={item.ageRating}
				id={item.id}
				year={item.year}
				right='2rem'
				ratingColor={ratingColor}
				rating={item.rating.kp}
				width='100%'
				height='auto'
				name={item.name}
				url={item.poster.url}
			/>
		</>
	)
}
