import cl from './RatingButtons.module.scss'
import styled from 'styled-components'
import { FC, PropsWithChildren } from 'react'

interface RatingButtonsProps {
	isAvailabilityRating: boolean
	handleVisble: () => void
	submitButton: () => void
	changeRating: () => void
	closeModalRating: () => void
}

const StyledRatingButtons = styled.div`
	color: black;
	background-color: white;
`

export const RatingButtons: FC<RatingButtonsProps> = ({
	isAvailabilityRating,
	closeModalRating,
	handleVisble,
	submitButton,
	changeRating
}) => {
	const onClick = () => {
		handleVisble()
		submitButton()
	}

	return (
		<>
			{isAvailabilityRating ? (
				<div className={cl.button}>
					<StyledRatingButtons onClick={() => closeModalRating()}>
						{'оставить'}
					</StyledRatingButtons>
					<StyledRatingButtons onClick={() => changeRating()}>
						{'поменять'}
					</StyledRatingButtons>
				</div>
			) : (
				<StyledRatingButtons className={cl.addButton} onClick={() => onClick()}>
					{'поставить оценку'}
				</StyledRatingButtons>
			)}
		</>
	)
}
