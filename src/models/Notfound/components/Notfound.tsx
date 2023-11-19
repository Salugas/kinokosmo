import Container from 'components/Сontainer/Container'
import cl from './Notfound.module.scss'
import { kosmo } from './images/kosmo'

export const Notfound = () => {
	return (
		<Container center>
			<div className={cl.wrapper}>
				<div className={cl.images}>
					<img src={kosmo} alt='' />
				</div>
				<div className={cl.error}>
					<div className={cl.error__404}>{'404'}</div>
					<div className={cl.error__text}>{'page not found'}</div>
				</div>
			</div>
		</Container>
	)
}
