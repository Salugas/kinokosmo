import { Poster } from 'components/Poster/Poster'
import { calcRating } from 'helpers/calcRating'
import { FC } from 'react'
import { IMovies } from 'types/IMovies'

interface MoviesItemProps {
	item: IMovies
}

export const MoviesItem: FC<MoviesItemProps> = ({ item }) => {
	const ratingColor = calcRating(item.rating.kp)

	return (
		<>
			<Poster
				id={item.id}
				year={item.year}
				name={item.name}
				url={item.poster.url}
				ageRating={item.ageRating}
				rating={item.rating.kp}
				ratingColor={ratingColor}
				right='2rem'
				width='100%'
				height='auto'
			/>
		</>
	)
}
