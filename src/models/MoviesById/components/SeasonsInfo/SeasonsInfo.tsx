import React, { FC } from 'react'
import { IMoviesSeasonsInfo } from 'types/IMovies'

interface SeasonsInfoProps {
	seasonsInfo: IMoviesSeasonsInfo[] | undefined
}

export const SeasonsInfo: FC<SeasonsInfoProps> = ({ seasonsInfo }) => {
	let countSeasons =
		seasonsInfo &&
		seasonsInfo.reduce((acc, curr) => (acc.number > curr.number ? acc : curr))

	return <div>Сезонов {countSeasons?.number}</div>
}
