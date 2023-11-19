import cl from './Buttons.module.scss'
import { FC, useRef } from 'react'

import { Button } from '../UI/Button/Button'

import { convertTypeMovie } from '../../../../helpers/convertTypeMovie'

import { IMovies } from 'types/IMovies'

import { FavoritesButton } from '../FavoritesButton/FavoritesButton'

import { CiPlay1 } from 'react-icons/ci'
import { useAppSelector } from 'hooks/redux'
import { RatingButton } from '../RatingButton/RatingButton'
import { AuthWarnings } from './AuthWarnings/AuthWarnings'

interface ButtonsProps {
	typeNumber: number | undefined
	movie?: IMovies | undefined
}

const Buttons: FC<ButtonsProps> = ({ typeNumber, movie }) => {
	const typeMovie = convertTypeMovie(typeNumber)

	const { isWarning: favoriteWarning } = useAppSelector(
		state => state.favoritesMoviesReducer
	)
	const { warning: ratingWarning } = useAppSelector(
		state => state.ratingsMoviesReducer
	)

	return (
		<div className={cl.wrapper}>
			<Button background={'blue'}>
				<span>{`Смотреть ${typeMovie}`}</span>
				<CiPlay1 className={cl.icon} />
			</Button>
			<Button background={'grey'}>
				<span>{'Трейлер'}</span>
			</Button>
			<div className={cl.buttons}>
				<div>
					<FavoritesButton movie={movie} movieId={movie?.id} />
					<AuthWarnings type='избранное' warning={favoriteWarning} />
				</div>
				<div>
					<RatingButton id={movie?.id} />
					<AuthWarnings type='рейтинг' warning={ratingWarning} />
				</div>
			</div>
		</div>
	)
}

export default Buttons
