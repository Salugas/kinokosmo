import cl from './Title.module.scss'

export const Title = () => {
	return (
		<div className={cl.wrapper}>
			<h1 className={cl.title}>{'Войди или зарегистрируйся'}</h1>
			<span className={cl.span}>
				{'чтобы пользоваться на любом устройстве'}
			</span>
		</div>
	)
}
