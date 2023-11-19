import cl from './Photo.module.scss'
import { FC } from 'react'

interface PhotoProps {
	photo: string | undefined
}

export const Photo: FC<PhotoProps> = ({ photo }) => {
	return (
		<div className={cl.photo}>
			<img src={photo} alt='photo' />
		</div>
	)
}
