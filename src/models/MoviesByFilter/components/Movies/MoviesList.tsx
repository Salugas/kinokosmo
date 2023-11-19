import cl from './Movies.module.scss'

import { FC } from 'react'
import { IMovies } from 'types/IMovies'
import { MoviesItem } from './MoviesItem'

import { Loader } from 'components/Loader/Loader'
import { Grid } from 'components/Grid/Grid'

interface MoviesListProps {
	movies: IMovies[] | undefined
	isLoading: boolean
}

export const MoviesList: FC<MoviesListProps> = ({ movies, isLoading }) => {
	if (isLoading) {
		return (
			<>
				<div className={cl.loader}>
					<Loader height={'100%'} width={'100%'} />
				</div>
			</>
		)
	}

	return <Grid>{movies && movies.map(item => <MoviesItem item={item} />)}</Grid>
}
