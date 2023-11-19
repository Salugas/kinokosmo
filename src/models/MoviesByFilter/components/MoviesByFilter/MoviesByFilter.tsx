import cl from './MoviesByFilter.module.scss'

import Container from 'components/Сontainer/Container'

import React, { useEffect } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

import { MoviesByFilterAPI } from '../../API/MoviesByFilterAPI'

import { MoviesList } from '../Movies/MoviesList'
import { FilterSelect } from '../FilterSelect/FilterSelect'

import { useAppSelector } from 'hooks/redux'

import { covertTypeLanguage } from 'models/MoviesByFilter/helpers/covertTypeLanguage'

import { options } from 'models/MoviesByFilter/data/options'
import { PaginationButton } from 'components/UI/Button/PaginationButton'
import { useActions } from 'hooks/useActions'
import { Loader } from 'components/Loader/Loader'
import { usePagination } from '../../hooks/usePagination'
import { IMovies } from 'types/IMovies'

export const MoviesByFilter = () => {
	const { type } = useParams()
	const location = useLocation()
	const [serchParams, setSearchParams] = useSearchParams()
	const paginationRef = React.useRef<HTMLDivElement | null>(null)

	const { limit } = useAppSelector(state => state.paginatoinLimitReducer)
	const { filters } = useAppSelector(state => state.filtersMoviesReducer)

	const { setCountPaginatoinLimit, setResetPaginatoinLimit, setResetFilters } =
		useActions()

	useEffect(() => {
		setSearchParams({
			genre: filters.genre,
			year: filters.year,
			rating: filters.rating
		})
	}, [filters.genre, filters.year, filters.rating])

	useEffect(() => {
		setResetFilters()
		setResetPaginatoinLimit()
	}, [location.pathname])

	const { data, isLoading, isSuccess } =
		MoviesByFilterAPI.useFetchMoviesByFilterQuery({
			filters,
			type,
			limit
		})
	const { docs: movies }: any = { ...data }

	usePagination(paginationRef, movies, setCountPaginatoinLimit)

	const ruType = covertTypeLanguage(type)

	return (
		<Container center>
			<div className={cl.wrapper}>
				<div className={cl.type}>
					{filters.genre == '' ? (
						ruType
					) : (
						<>
							{ruType + ':'} {filters.genre}
						</>
					)}
				</div>
				<div className={cl.select}>
					{options.map(option => (
						<FilterSelect key={option.typeName} option={option} />
					))}
				</div>
				<MoviesList isLoading={isLoading} movies={movies} />
			</div>
			{movies && limit <= movies.length + 1 && (
				<div ref={paginationRef} className={cl.pagination}>
					<PaginationButton>{'Еще'}</PaginationButton>
					{isSuccess && (
						<div>
							<Loader height='8rem' width='8rem' />
						</div>
					)}
				</div>
			)}
		</Container>
	)
}
