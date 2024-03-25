import cl from './FilterSelect.module.scss'

import { FC } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { IOptions } from 'models/MoviesByFilter/types/IFilters'

interface FilterSelectItemProps {
	item: IOptions
	optionValue: any
	handleActive: (option: IOptions) => void
	getFilters: (option: IOptions) => void
}

export const FilterSelectItem: FC<FilterSelectItemProps> = ({
	item,
	optionValue,
	handleActive,
	getFilters
}) => {
	return (
		<div
			className={`${cl[`sub-options`]} ${
				optionValue?.name == item.name && cl.active
			}`}
			onClick={() => {
				handleActive(item)
				getFilters(item)
			}}
		>
			<div className={cl.name}>{item.name}</div>
			{optionValue?.name == item.name && (
				<AiOutlineCheck className={cl.check} />
			)}
		</div>
	)
}
