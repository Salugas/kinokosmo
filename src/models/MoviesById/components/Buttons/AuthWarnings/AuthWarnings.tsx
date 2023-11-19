import cl from './AuthWarnings.module.scss'

import { useAppSelector } from 'hooks/redux'
import { FC, useEffect, useRef } from 'react'

interface AuthWarningsProps {
	warning: string
	type: string
}

export const AuthWarnings: FC<AuthWarningsProps> = ({ warning, type }) => {
	const errorRef = useRef<HTMLDivElement | null>(null)

	const { isAuth } = useAppSelector(state => state.AuthReducer)

	useEffect(() => {
		const setWarning = (errorRef: any) => {
			if (!isAuth) {
				setTimeout(() => {
					errorRef?.current?.classList.add(cl.active)
				}, 1)
				setTimeout(() => {
					errorRef?.current?.classList.remove(cl.active)
				}, 2000)
			}
		}
		setWarning(errorRef)
	}, [warning])

	return (
		<>
			{warning !== '' && (
				<div ref={errorRef} className={cl.error}>
					{warning} <span> {type}</span>
				</div>
			)}
		</>
	)
}
