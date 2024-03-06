import cl from './FilterSelect.module.scss'
import styled from 'styled-components'

import { useActions } from 'hooks/useActions'

import { IoIosArrowDown } from 'react-icons/io'

import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
import { FilterSelectItem } from './FilterSelectItem'
import { useAppSelector } from 'hooks/redux'
import { IOptions, ISelect } from 'models/MoviesByFilter/types/IFilters'
import { useLocation } from 'react-router-dom'
import { currentYear } from 'helpers/currentYear'

interface FilterSelectProps {
	option: ISelect
}

const StyledSelect = styled.div`
	.arrow {
		transform: rotate(0deg);
		transition: transform 0.3s ease-in;

		@media (max-width: 767px) {
			width: 1.5rem;
		}
	}
	.arrow.active {
		transform: rotate(180deg);
	}
`
export const FilterSelect: FC<PropsWithChildren<FilterSelectProps>> = ({
	option
}) => {
	const location = useLocation()

	const selectRef = React.createRef<HTMLDivElement>()

	const [visble, setVisble] = useState<boolean>(false)
	const [active, setActive] = useState<boolean>(false)
	const [optionValue, setOptionValue] = useState<any>()
	const [optionType, setOptionType] = useState<any>()

	const {
		setFilterGenre,
		setFilterRatings,
		setFiterYears,
		setResetPaginatoinLimit
	} = useActions()
	const { filters } = useAppSelector(state => state.filtersMoviesReducer)

	useEffect(() => {
		setOptionValue('')
	}, [location.pathname])

	const getFilters = (option: any) => {
		option.type == 'year' && setFiterYears(option.value)
		option.type == 'rating' && setFilterRatings(option.value)
		option.type == 'genre' && setFilterGenre(option.value)
	}

	const handleActive = (option: any) => {
		setResetPaginatoinLimit()
		setActive(prev => !prev)
		setOptionValue(option)
	}

	const handleVisble = (option: any, ref: any) => {
		setOptionType(option)
		ref && setVisble(prev => !prev)
	}

	return (
		<StyledSelect className={cl.select}>
			<div
				className={cl.type}
				ref={selectRef}
				onClick={() => {
					handleVisble(option.typeName, selectRef.current)
				}}
			>
				<div className={cl.title}>
					{(option.typeName == 'жанры' && filters.genre) ||
						(filters.genre == '' && option.typeName == 'жанры' && 'жанры')}

					{(option.typeName == 'годы выхода' &&
						filters.year !== `0-${currentYear()}` &&
						filters.year) ||
						(filters.year == `0-${currentYear()}` &&
							option.typeName == 'годы выхода' &&
							'годы выхода')}

					{(option.typeName == 'рейтинг' &&
						filters.rating !== '1-10' &&
						filters.rating) ||
						(filters.rating == '1-10' &&
							option.typeName == 'рейтинг' &&
							'рейтинг')}
				</div>
				<IoIosArrowDown
					className={`arrow  ${visble && 'active'}`}
					size={'2.5rem'}
				/>
			</div>
			{visble && (
				<div className={cl.options}>
					{option.option.map((item: IOptions) => (
						<FilterSelectItem
							item={item}
							optionValue={optionValue}
							handleActive={handleActive}
							getFilters={getFilters}
						/>
					))}
				</div>
			)}
		</StyledSelect>
	)
}
