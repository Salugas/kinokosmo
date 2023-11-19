import cl from './RatingNum.module.scss'

import { FC, useRef, useState } from 'react'
import { RatingNumItem } from './RatingNumItem'
import { useActions } from 'hooks/useActions'
import { useAppSelector } from 'hooks/redux'

interface RatingNumListProps {
	id: number | undefined
}

export const RatingNumList: FC<RatingNumListProps> = ({ id }) => {
	const ratingList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	const { setRatingSelection, setMovieIdSelection } = useActions()

	const ratingRef = useRef<HTMLDivElement | null>(null)

	const addRating = (item: number) => {
		if (id) {
			setMovieIdSelection(id)
			setRatingSelection(item)
		}
	}

	const { selectedRating } = useAppSelector(state => state.ratingsMoviesReducer)

	return (
		<div className={cl.rating}>
			<div className={cl.rating__list}>
				{ratingList.map((item, i) => (
					<RatingNumItem
						selectedRating={selectedRating}
						addRating={() => addRating(item)}
						key={i}
						ref={ratingRef}
						item={item}
					/>
				))}
			</div>
			<div className={cl.rating__text}>
				<span>{'очень плохо'}</span> <span>{'хорошо'}</span>
			</div>
		</div>
	)
}
