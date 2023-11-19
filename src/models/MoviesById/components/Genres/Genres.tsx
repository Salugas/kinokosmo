import cl from './Genres.module.scss'

import { FC } from 'react'

import { IMoviesGenres } from '../../../../types/IMovies'

interface GenresProps {
	genres: IMoviesGenres[] | undefined
}

export const Genres: FC<GenresProps> = ({ genres }) => {
	return (
		<>
			<div className={cl.genres}>{genres && genres[0].name}</div>
		</>
	)
}
