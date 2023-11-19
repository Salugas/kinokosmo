import React, { FC } from 'react'

interface AgeRatingProps {
	ageRating: number | undefined
}

export const AgeRating: FC<AgeRatingProps> = ({ ageRating }) => {
	return (
		<>
			{ageRating == null ? (
				<></>
			) : (
				<div>
					{ageRating}
					{'+'}
				</div>
			)}
		</>
	)
}
