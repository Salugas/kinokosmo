import cl from './Facts.module.scss'
import Container from '../Сontainer/Container'

import { FC, useEffect, useState } from 'react'

import { IMoviesFacts } from '../../types/IFacts'

import { FactsItem } from './FactsItem'
import { PaginationButton } from './UI/PaginationButton'
import { useLocation } from 'react-router-dom'

interface FactsListProps {
	facts: IMoviesFacts[] | undefined
}

export const FactsList: FC<FactsListProps> = ({ facts }) => {
	const location = useLocation()
	let [statePagination, setStatePagination] = useState<number>(5)

	const paginationFacts = facts?.slice(0, statePagination)

	const factsLength: number | undefined = (facts && facts?.length + 1) || 0

	const addPagination = () => {
		if (statePagination <= factsLength) {
			setStatePagination(prev =>
				statePagination >= factsLength
					? (statePagination = factsLength)
					: prev + 20
			)
		}
	}

	useEffect(() => {
		setStatePagination(5)
	}, [location.pathname])

	const resetPagination = () => {
		if (facts && statePagination >= 5) {
			setStatePagination(5)
		}
		if (statePagination <= 5) {
			setStatePagination(5)
		}
	}

	return (
		<Container center>
			{facts?.length !== 0 && (
				<div className={cl.wrapper}>
					<div className={cl.facts}>
						<div className={cl.facts__title}>{'Факты'}</div>
						{paginationFacts &&
							paginationFacts.map(item => (
								<FactsItem
									statePagination={statePagination}
									key={item.value}
									item={item}
								/>
							))}
					</div>

					{facts && facts?.length >= 5 && (
						<div className={cl.buttons}>
							{facts && statePagination >= facts?.length == false && (
								<PaginationButton onClick={() => addPagination()}>
									{'Показать еще...'}
								</PaginationButton>
							)}

							{statePagination > 5 && (
								<PaginationButton onClick={() => resetPagination()}>
									{'Скрыть'}
								</PaginationButton>
							)}
						</div>
					)}
				</div>
			)}
		</Container>
	)
}
