import cl from './Movies.module.scss'

import { FC, useState } from 'react'
import { IPersonMovies } from 'types/IPerson'
import { MoviesItem } from './MoviesItem'
import { Link } from 'react-router-dom'
import { Grid } from 'components/Grid/Grid'
import { PaginationButton } from 'components/UI/Button/PaginationButton'

interface MoviesListProps {
	movies: IPersonMovies[] | undefined
}

export const MoviesList: FC<MoviesListProps> = ({ movies }) => {
	const [limit, setLimit] = useState<number>(12)

	const countMovies: number | undefined = movies && movies?.length + 1

	const data = movies?.slice(0, limit)

	const addLimit = () => {
		setLimit(prev => (prev += 8))
	}

	const resetLimit = () => {
		setLimit(12)
	}

	return (
		<div>
			<div className={cl.movieLength}>
				{'Фильмография:'} {'(' + countMovies + ')'}
			</div>

			<Grid>
				{data &&
					data.map(item => (
						<Link to={`/movie/${item.id}`}>
							<MoviesItem item={item} />
						</Link>
					))}
			</Grid>
			<div className={cl.buttons}>
				{countMovies && limit >= countMovies ? (
					<PaginationButton onClick={() => resetLimit()}>
						{'Скрыть'}
					</PaginationButton>
				) : (
					<>
						<PaginationButton onClick={() => addLimit()}>
							{'Eще...'}
						</PaginationButton>
						{limit > 12 && (
							<PaginationButton onClick={() => resetLimit()}>
								{'Скрыть'}
							</PaginationButton>
						)}
					</>
				)}
			</div>
		</div>
	)
}
