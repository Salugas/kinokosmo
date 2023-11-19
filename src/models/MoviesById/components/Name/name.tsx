import { FC } from 'react'
import cl from './name.module.scss'

interface NameProps {
	name: string | undefined
}

export const Name: FC<NameProps> = ({ name }) => {
	return (
		<>
			{name == null ? (
				<></>
			) : (
				<div className={cl.name}>
					<img src={name} alt='logo' />
				</div>
			)}
		</>
	)
}
