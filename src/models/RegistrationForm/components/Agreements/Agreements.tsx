import cl from './Agreements.module.scss'
import { Link } from 'react-router-dom'

export const Agreements = () => {
	return (
		<div className={cl.wrapper}>
			<span>{'Нажимая «Продолжить», я соглашаюсь'}</span>
			<div className={cl.title}></div>

			<div className={cl.links}>
				<div>{'с'}</div>
				<Link to={''}>{'Политикой конфиденциальности'}</Link>
			</div>
			<div className={cl.links}>
				<div>{'и'}</div>
				<Link to={''}>{'Пользовательским соглашением'}</Link>
			</div>
		</div>
	)
}
