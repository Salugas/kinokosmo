import cl from './Header.module.scss'

import { Close } from 'components/UI/Close/Close'
import { useAppSelector } from 'hooks/redux'
import { useActions } from 'hooks/useActions'
import { useEffect, useRef } from 'react'

export const Header = () => {
	const { setVisbleRegistrationModal } = useActions()
	const { isAuth } = useAppSelector(state => state.AuthReducer)

	const progresBarRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (isAuth) {
			setTimeout(() => {
				progresBarRef?.current?.classList.add(cl.active)
			}, 1)
		}
	}, [isAuth])

	return (
		<>
			<div className={cl.wrapper}>
				<div className={cl.row}>
					<div className={cl.title}>
						{isAuth ? 'Вы вошли' : 'Вход или регистрация'}{' '}
					</div>
					<div
						onClick={() => setVisbleRegistrationModal(false)}
						className={cl.close}
					>
						<Close
							ABheight={'3rem'}
							ABwidth={'0.3rem'}
							height={'2rem'}
							width={'3rem'}
							left='1.5rem'
							position='absolute'
						/>
					</div>
				</div>

				<div ref={progresBarRef} className={`${cl.progresBar}`}></div>
			</div>
		</>
	)
}
