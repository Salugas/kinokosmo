import cl from './Profession.module.scss'

import { FC } from 'react'
import { ProfessionItem } from './ProfessionItem'

interface ProfessionListProps {
	profession: { value: string }[] | undefined
}

export const ProfessionList: FC<ProfessionListProps> = ({ profession }) => {
	const item = profession
		?.map((item: { value: string }) => item.value)
		?.join(',  ')

	return (
		<div className={cl.wrapper}>
			<div className={cl.career}>{'Карьера:'}</div>
			<div className={cl.profission}>
				<ProfessionItem item={item} />
			</div>
		</div>
	)
}
