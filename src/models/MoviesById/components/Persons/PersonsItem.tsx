import cl from './Persons.module.scss'

import { FC } from 'react'
import { IMoviesPersons } from '../../../../types/IMovies'

interface PersonsItemProps {
	item: IMoviesPersons
}

export const PersonsItem: FC<PersonsItemProps> = ({ item }) => {
	return (
		<div className={cl.person__item}>
			<div className={cl.photo}>{<img src={item.photo} alt='' />}</div>
			<div className={cl.name}>{item.name ? item.name : item.enName}</div>
		</div>
	)
}
