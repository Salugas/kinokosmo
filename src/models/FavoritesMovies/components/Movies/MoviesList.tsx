import { FC } from 'react'

import { MoviesItem } from './MoviesItem'
import { IMovies } from 'types/IMovies'
import { Grid } from 'components/Grid/Grid'

interface MoviesListProps {
	movies: IMovies[] | undefined
}

export const MoviesList: FC<MoviesListProps> = ({ movies }) => {
	return <Grid>{movies && movies.map(item => <MoviesItem item={item} />)}</Grid>
}
