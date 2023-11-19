import cl from './MobileLogo.module.scss'

const MobileLogo = () => {
	return (
		<div className={cl.wrapper}>
			<div className={cl.pause}></div>
			<div className={cl.play}></div>
		</div>
	)
}

export default MobileLogo
