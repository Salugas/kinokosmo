import { convertDate } from 'helpers/convertDate'
import cl from './Birthday.module.scss'

import { FC } from 'react'

interface BirthdayProps {
	birthday: Date | undefined
}

export const Birthday: FC<BirthdayProps> = ({ birthday }) => {
	const dateBirthday = convertDate(birthday)

	return (
		<div className={cl.wrapper}>
			<div className={cl.date}>{'Дата рождения:'}</div>
			<div className={cl.birthday}>{dateBirthday}</div>
		</div>
	)
}
