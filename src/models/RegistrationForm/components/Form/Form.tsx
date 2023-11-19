import cl from './Form.module.scss'

import { useForm } from 'react-hook-form'
import { RegistrationInput } from '../UI/input/RegistrationInput'
import { RegistrationButton } from '../UI/button/RegistrationButton'
import { useState } from 'react'
import { useActions } from 'hooks/useActions'
import { useAppSelector } from 'hooks/redux'
import { Loader } from 'components/Loader/Loader'

export const Form = () => {
	const { isLoading } = useAppSelector(state => state.AuthReducer)
	const { setAuth } = useActions()

	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset
	} = useForm({ mode: 'onBlur' })

	const onSubmit = (data: any) => {
		setAuth([data])
	}

	return (
		<>
			{!isLoading ? (
				<form onSubmit={handleSubmit(onSubmit)} className={cl.wrapper}>
					<RegistrationInput
						register={{
							...register('name', { required: 'Поле обязательно к заполнению' })
						}}
						errors={errors?.name}
						isErrorMassage={errors?.name?.message}
						description={'имя'}
					/>
					<RegistrationInput
						register={{
							...register('email', {
								required: 'Поле обязательно к заполнению'
							})
						}}
						errors={errors?.email}
						isErrorMassage={errors?.email?.message}
						description={'через email или телефон'}
					/>
					<RegistrationButton isValid={!isValid} />
				</form>
			) : (
				<div className={cl.loader}>
					<Loader />
				</div>
			)}
		</>
	)
}
