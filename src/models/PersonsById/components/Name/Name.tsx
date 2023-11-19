import cl from './Name.module.scss'
import { FC } from 'react'

interface NameProps {
	name: string | undefined
	enName: string | undefined
}

export const Name: FC<NameProps> = ({ name, enName }) => {
	return (
		<div className={cl.name}>
			<div className={cl.name__ru}>{name}</div>
			<div className={cl.name__en}>{enName}</div>
		</div>
	)
}
