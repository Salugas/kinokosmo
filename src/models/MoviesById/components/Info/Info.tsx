import cl from './Info.module.scss'
import Container from '../../../../components/Сontainer/Container'
import Buttons from '../Buttons/Buttons'

import { FC } from 'react'
import { calcRating } from '../../../../helpers/calcRating'
import { Name } from '../Name/name'
import { Rating } from '../../../../components/Rating/Rating'
import { Genres } from '../Genres/Genres'
import {
	IMovies,
	IMoviesGenres,
	IMoviesPersons,
	IMoviesSeasonsInfo
} from '../../../../types/IMovies'
import { Description } from '../Description/Description'
import { Backdrop } from '../Backdrop/Backdrop'
import { Countries } from '../Countries/Countries'
import { Year } from '../Year/Year'
import { MovieLength } from '../MovieLength/MovieLength'
import { AgeRating } from '../AgeRating/AgeRating'
import { ActorAndPruducer } from '../ActorAndPruducer/ActorAndPruducer'
import { SeasonsInfo } from '../SeasonsInfo/SeasonsInfo'

interface InfoProps {
	movie: IMovies | undefined
	ageRating: number | undefined
	name: string | undefined
	persons: IMoviesPersons[] | undefined
	rating: number | undefined
	genres: IMoviesGenres[] | undefined
	description: string | undefined
	backdrop: string | undefined
	movieLength: number | undefined
	year: number | undefined
	countries: { name: string }[] | undefined
	typeNumber: number | undefined
	seasonsInfo: IMoviesSeasonsInfo[] | undefined
	type: string | undefined
}

export const Info: FC<InfoProps> = ({
	movie,
	ageRating,
	movieLength,
	persons,
	year,
	countries,
	name,
	rating,
	genres,
	description,
	backdrop,
	typeNumber,
	seasonsInfo,
	type
}) => {
	const ratingColor = calcRating(rating)

	return (
		<div className={cl.info}>
			<Backdrop backdrop={backdrop} />
			<Container center>
				<div className={cl.column}>
					<Name name={name} />

					<div className={cl.row}>
						<div className={cl.rating}>
							<Rating backgroundColor={ratingColor} padding={'0.2rem 0.6rem'}>
								{rating?.toFixed(1)}
							</Rating>
						</div>
						<div className={cl.row__description}>
							<Year year={year} />
							<Genres genres={genres} />
							<AgeRating ageRating={ageRating} />
							<Countries countries={countries} />
							{type === 'tv-series' ? (
								<SeasonsInfo seasonsInfo={seasonsInfo} />
							) : (
								<MovieLength movieLength={movieLength} />
							)}
						</div>
					</div>
					<Description description={description} />
					<ActorAndPruducer persons={persons} />

					<Buttons typeNumber={typeNumber} movie={movie} />
				</div>
			</Container>
		</div>
	)
}
