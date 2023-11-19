import cl from './Movies.module.scss'

import { FC } from 'react'

import { ISearch } from '../../../../types/ISearch'
import MoviesItem from './MoviesItem'
import { Link } from 'react-router-dom'

interface MoviesItemProps {
	movies: ISearch[]
	isLoading: boolean
	isError: boolean
}

export const MoviesList: FC<MoviesItemProps> = ({ movies }) => {
	return (
		<>
			{movies &&
				movies.map((item: ISearch) => (
					<div key={item.id} className={cl.wrapper}>
						<Link to={`/movies/${item.id}`}>
							<MoviesItem item={item} />
						</Link>
					</div>
				))}
		</>
	)
}
