import { FC } from 'react'
import { IPersonMovies } from 'types/IPerson'
import { PersonsByIdAPI } from 'models/PersonsById/API/PersonsByIdAPI'
import { Poster } from 'components/Poster/Poster'
import { calcRating } from 'helpers/calcRating'

interface MoviesItemProps {
	item: IPersonMovies
}

export const MoviesItem: FC<MoviesItemProps> = ({ item }) => {
	const { data: movies } = PersonsByIdAPI.useFetchPersonsImagesMoviesQuery(
		item?.id
	)

	const ratingColor = calcRating(movies?.rating.kp)
	console.log(movies?.rating.kp)

	return (
		<>
			<Poster
				id={item?.id}
				url={movies?.poster?.url}
				name={movies?.name}
				ratingColor={ratingColor}
				rating={movies?.rating.kp}
				year={movies?.year}
				ageRating={movies?.ageRating}
				right='2rem'
				width='100%'
				height='auto'
			/>
		</>
	)
}
