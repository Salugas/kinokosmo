import cl from './ModalSeachMovie.module.scss'
import SearchInput from '../UI/Input/SearchInput'
import Container from '../../../../components/Сontainer/Container'

import React, { useState } from 'react'

import { Modal } from '../../../../components/UI/Modal/Modal'
import { Close } from '../../../../components/UI/Close/Close'
import { MoviesList } from '../Movies/MoviesList'
import { Loader } from '../../../../components/Loader/Loader'

import { MoviesSearchAPI } from '../../API/MoviesSearchAPI'

import { useActions } from '../../../../hooks/useActions'
import { PaginationButton } from 'components/UI/Button/PaginationButton'
import { useSearchParams } from 'react-router-dom'

export const ModalSeachMovie = () => {
	const searchRef = React.createRef<HTMLInputElement>()

	const [serchParams, setSearchParams] = useSearchParams()

	const [query, setQuery] = useState<any>('')
	const [limit, setLimit] = useState<any>(10)

	const OnChange = (query: any) => {
		setQuery(query)
	}

	const { data, isLoading, isError, isFetching } =
		MoviesSearchAPI.useFetchAllSearchMoviesQuery({
			query,
			limit
		})
	const { docs: movies }: any = { ...data }

	const { setVisbleSearchModal } = useActions()

	const paginationsLimit = () => {
		setLimit((prev: any) => prev + 10)
	}

	const resetPaginationsLimit = () => {
		setLimit(10)
	}

	const onClickCLose = () => {
		setVisbleSearchModal(false)
		resetPaginationsLimit()
		setSearchParams({})
	}

	return (
		<div className={cl.wrapper}>
			<div className={cl.close} onClick={() => onClickCLose()}>
				<Close
					ABheight={'4rem'}
					ABwidth={'0.3rem'}
					height={'3rem'}
					width={'3rem'}
					position='fixed'
					left='2rem'
				/>
			</div>
			<Modal overflowY={'scroll'}>
				<Container center>
					<div className={cl.wrapper}>
						<div className={cl.input}>
							<SearchInput
								ref={searchRef}
								onChange={() => OnChange(searchRef.current?.value)}
								type={'text'}
								placeholder={'Поиск'}
								query={query}
							/>
						</div>
						{isLoading ? (
							<div className={cl.loader}>
								<Loader />
							</div>
						) : (
							<>
								<div className={cl.movies}>
									<MoviesList
										movies={movies}
										isLoading={isLoading}
										isError={isError}
									/>
								</div>

								{movies?.length !== 0 && (
									<div className={cl.pagination}>
										<PaginationButton onClick={() => paginationsLimit()}>
											{'Еще...'}
										</PaginationButton>
										{isFetching && <Loader width='6rem' height='6rem' />}
									</div>
								)}
							</>
						)}
					</div>
				</Container>
			</Modal>
		</div>
	)
}
