import { FC } from 'react'
import cl from './Backdrop.module.scss'

interface BackdropProps {
	backdrop: string | undefined
}

export const Backdrop: FC<BackdropProps> = ({ backdrop }) => {
	return (
		<div className={cl.backdrop}>
			<img src={backdrop} alt='' />
		</div>
	)
}
