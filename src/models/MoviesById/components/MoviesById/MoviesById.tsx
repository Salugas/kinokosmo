import cl from './MoviesById.module.scss'

import { useParams } from 'react-router-dom'

import { MoviesByIdAPI } from '../../API/MoviesByIdAPI'
import { Info } from '../Info/Info'
import { Tabs } from '../Tabs/Tabs'
import { SimilarMoviesList } from '../SimilarMovies/SimilarMoviesList'
import { FactsList } from '../../../../components/Facts/FactsList'
import { PersonsList } from '../Persons/PersonsList'
import { ModdalImages } from '../ModdalImages/ModdalImages'

import { useAppSelector } from 'hooks/redux'
import { RaitingModal } from '../RaitingModal/RaitingModal'

export const MoviesById = () => {
	const { id } = useParams()

	const { data: movie } = MoviesByIdAPI.useFetchMoviesByIdQuery(id)

	const { data } = MoviesByIdAPI.useFetchImagesByIdQuery(id)
	const { docs: images }: any = { ...data }

	const { isAuth } = useAppSelector(state => state.AuthReducer)
	const { isVisbleRatings } = useAppSelector(
		state => state.ratingsMoviesReducer
	)
	const { visbleImages } = useAppSelector(state => state.visbleModalReducer)

	return (
		<div className={cl.wrapper}>
			{isVisbleRatings && isAuth && <RaitingModal id={movie?.id} />}
			{visbleImages && <ModdalImages />}

			<Info
				movie={movie}
				ageRating={movie?.ageRating}
				year={movie?.year}
				movieLength={movie?.movieLength}
				countries={movie?.countries}
				name={movie?.logo.url}
				rating={movie?.rating.kp}
				genres={movie?.genres}
				description={movie?.description}
				backdrop={movie?.backdrop.url}
				typeNumber={movie?.typeNumber}
				persons={movie?.persons}
				seasonsInfo={movie?.seasonsInfo}
				type={movie?.type}
			/>
			<div className={cl.main}>
				<Tabs description={movie?.description} images={images} />
				<SimilarMoviesList similarMovies={movie?.similarMovies} />
				<PersonsList persons={movie?.persons} />
				<FactsList facts={movie?.facts} />
			</div>
		</div>
	)
}
