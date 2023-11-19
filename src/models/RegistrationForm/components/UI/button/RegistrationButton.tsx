import { FC } from 'react'
import cl from './RegistrationButton.module.scss'

interface RegistrationButtonProps {
	isValid: boolean
}

export const RegistrationButton: FC<RegistrationButtonProps> = ({
	isValid
}) => {
	return (
		<button className={cl.button} type='submit'>
			{'Продолжить'}
		</button>
	)
}
