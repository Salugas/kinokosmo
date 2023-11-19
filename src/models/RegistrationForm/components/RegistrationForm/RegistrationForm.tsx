import cl from './RegistrationForm.module.scss'
import Container from 'components/Сontainer/Container'

import { Modal } from 'components/UI/Modal/Modal'
import { Header } from '../Header/Header'
import { Title } from '../Title/Title'
import { Form } from '../Form/Form'
import { Agreements } from '../Agreements/Agreements'
import { useAppSelector } from 'hooks/redux'
import { useEffect, useRef, useState } from 'react'
import { useActions } from 'hooks/useActions'

export const RegistrationForm = () => {
	const { isAuth, setUser } = useAppSelector(state => state.AuthReducer)
	const { setVisbleRegistrationModal } = useActions()

	const titleRef_1 = useRef<HTMLDivElement | null>(null)
	const titleRef_2 = useRef<HTMLDivElement | null>(null)
	const nameRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (isAuth) {
			setTimeout(() => {
				nameRef?.current?.classList.add(cl.active)
				setTimeout(() => {
					titleRef_2?.current?.classList.add(cl.active)
				}, 100)
				setTimeout(() => {
					titleRef_1?.current?.classList.add(cl.active)
				}, 400)
			}, 1)
		}
	}, [isAuth])

	return (
		<Modal>
			<div
				className={cl.wrapper}
				onClick={() => isAuth && setVisbleRegistrationModal(false)}
			>
				<Header />
				<Container center>
					{isAuth ? (
						<div className={cl.hellowUser}>
							<div ref={titleRef_1} className={cl.title_1}>
								{'добро '}
							</div>
							<span ref={titleRef_2} className={cl.title_2}>
								{'пожаловать '}
							</span>

							<div ref={nameRef} className={cl.hellowUser__name}>
								{setUser.name}
							</div>
						</div>
					) : (
						<>
							<div className={cl.main}>
								<Title />
								<Form />
								<Agreements />
							</div>
						</>
					)}
				</Container>
			</div>
		</Modal>
	)
}
