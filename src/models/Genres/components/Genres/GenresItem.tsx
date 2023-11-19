import { useActions } from 'hooks/useActions'
import cl from './Genres.module.scss'

import { FC } from 'react'
import { IGenres } from 'types/IField'
import { useSearchParams } from 'react-router-dom'

interface GenresItemProps {
	genre: IGenres
}

export const GenresItem: FC<GenresItemProps> = ({ genre }) => {
	const [serchParams, setSearchParams] = useSearchParams()
	setSearchParams(genre.name)

	const { setFilterGenre } = useActions()

	return (
		<div className={cl.genres} onClick={() => setFilterGenre(genre.name)}>
			<div>{genre?.name}</div>
		</div>
	)
}
