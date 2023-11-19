import cl from './RaitingModal.module.scss'

import { FC, useEffect, useState } from 'react'

import { Modal } from 'components/UI/Modal/Modal'
import { RatingNumList } from './RatingNum/RatingNumList'

import { useActions } from 'hooks/useActions'
import { useAppSelector } from 'hooks/redux'
import { RatingButtons } from './UI/button/RatingButtons'

interface AddRaitingModalProps {
	id: number | undefined
}

export const RaitingModal: FC<AddRaitingModalProps> = ({ id }) => {
	const {
		setVisvleRatingsMovies,
		setAddRatingsMovies,
		setChangeRatingMode,
		setRemoveSelectionRating
	} = useActions()

	const { allDelileredRating } = useAppSelector(
		state => state.ratingsMoviesReducer
	)
	const [isAvailabilityRating, setIsAvailabilityRating] =
		useState<boolean>(false)
	const [availabilityRating, setAvailabilityRating] = useState<
		number | undefined
	>()

	const submitButton = () => {
		setAvailabilityRating(id && allDelileredRating[id])
		setAddRatingsMovies()
		setVisvleRatingsMovies(false)
	}

	const handleVisble = () => {
		for (let key in allDelileredRating) {
			if (+key === id) {
				setIsAvailabilityRating(true)
			}
		}
	}

	const changeRating = () => {
		setChangeRatingMode(true)
		setIsAvailabilityRating(false)
	}

	const closeModalRating = () => {
		setRemoveSelectionRating()
		setChangeRatingMode(false)
		setVisvleRatingsMovies(false)
	}

	useEffect(() => {
		setAvailabilityRating(id && allDelileredRating[id])
		handleVisble()
	}, [id, allDelileredRating])

	return (
		<Modal>
			<div className={cl.wrapper}>
				<div onClick={() => closeModalRating()} className={cl.close}></div>
				<div className={cl.title}>
					{isAvailabilityRating ? (
						<span>
							{'вы уже поставили рейтинг '}
							<span className={cl.title__rating}>{availabilityRating}</span>
						</span>
					) : (
						<span>{'оцените по 10-ти бальной шкале'}</span>
					)}
				</div>

				{isAvailabilityRating ? (
					<span className={cl.title__change}>{'хотите поменять?'}</span>
				) : (
					<RatingNumList id={id} />
				)}

				<RatingButtons
					isAvailabilityRating={isAvailabilityRating}
					closeModalRating={() => closeModalRating()}
					submitButton={() => submitButton()}
					handleVisble={() => handleVisble()}
					changeRating={() => changeRating()}
				></RatingButtons>
			</div>
		</Modal>
	)
}
