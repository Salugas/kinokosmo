import { PiStarThin } from 'react-icons/pi'
import { TiStarHalfOutline } from 'react-icons/ti'
import { Button } from '../UI/Button/Button'
import { FC, useEffect, useState } from 'react'
import { useActions } from 'hooks/useActions'
import { useAppSelector } from 'hooks/redux'

interface RatingButtonProps {
	id: number | undefined
}

export const RatingButton: FC<RatingButtonProps> = ({ id }) => {
	const { setWarningRatingsMovies, setVisvleRatingsMovies } = useActions()

	const { isAuth } = useAppSelector(state => state.AuthReducer)
	const { warning, allDelileredRating } = useAppSelector(
		state => state.ratingsMoviesReducer
	)

	const [isAvailabilityRating, setIsAvailabilityRating] =
		useState<boolean>(false)

	useEffect(() => {
		if (id) {
			if (allDelileredRating[id]) {
				setIsAvailabilityRating(true)
			} else {
				setIsAvailabilityRating(false)
			}
		}
	}, [id, allDelileredRating])

	const handleRatings = () => {
		isAuth && setVisvleRatingsMovies(true)
		if (!isAuth) {
			setWarningRatingsMovies('Войдите, чтобы поставить')
			if (warning == '') {
				setTimeout(() => {
					setWarningRatingsMovies('')
				}, 2600)
			}
		}
	}

	return (
		<Button onClick={() => handleRatings()} background='grey'>
			{isAvailabilityRating && isAuth ? (
				<TiStarHalfOutline size={'3.2rem'} />
			) : (
				<PiStarThin size={'3.2rem'} />
			)}
		</Button>
	)
}
