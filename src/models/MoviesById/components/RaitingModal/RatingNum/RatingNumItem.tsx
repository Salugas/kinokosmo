import { useAppSelector } from 'hooks/redux'
import cl from './RatingNum.module.scss'

import React from 'react'

interface RatingNumItemProps {
	selectedRating: number | null
	item: number
	addRating: (item: number) => void
}

export const RatingNumItem = React.forwardRef<
	HTMLDivElement,
	RatingNumItemProps
>((props, ratingRef) => {
	return (
		<div
			ref={ratingRef}
			onClick={() => {
				props.addRating(props.item)
			}}
			className={`${cl.rating__item}  ${
				props.item === props.selectedRating && cl.active
			}`}
		>
			{props.item}
		</div>
	)
})
