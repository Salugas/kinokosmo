import { FC } from 'react'

interface BackdropProps {
	backdrop: string
}

export const Backdrop: FC<BackdropProps> = ({ backdrop }) => {
	return <img src={backdrop} alt='' />
}
