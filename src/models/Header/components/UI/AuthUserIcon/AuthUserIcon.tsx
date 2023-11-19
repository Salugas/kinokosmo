import cl from './AuthUserIcon.module.scss'

import { useAppSelector } from 'hooks/redux'
import { IoIosLogIn } from 'react-icons/io'
import { PiUserCircleThin } from 'react-icons/pi'

const AuthUserIcon = () => {
	const { isAuth } = useAppSelector(state => state.AuthReducer)

	return (
		<div className={cl.wrapper}>
			<div className={cl.auth}>{isAuth ? 'Выйти' : 'Войти'}</div>

			{isAuth ? (
				<PiUserCircleThin className={cl.logo} />
			) : (
				<IoIosLogIn className={cl.logo} />
			)}
		</div>
	)
}

export default AuthUserIcon
