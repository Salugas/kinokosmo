import cl from './ModdalImages.module.scss'

import { Close } from 'components/UI/Close/Close'
import { Modal } from 'components/UI/Modal/Modal'

import { useAppSelector } from 'hooks/redux'
import { useActions } from 'hooks/useActions'

export const ModdalImages = () => {
	const { setVisbleImages } = useActions()
	const { imagesUrl } = useAppSelector(state => state.imagesUrlReducer)

	return (
		<Modal>
			<div className={cl.close}>
				<Close
					onClick={() => setVisbleImages(false)}
					ABheight={'4rem'}
					ABwidth={'0.3rem'}
					height={'3rem'}
					width={'3rem'}
					position='fixed'
					left='2rem'
				/>
			</div>
			<div className={cl.images}>
				<img src={imagesUrl} alt='' />
			</div>
		</Modal>
	)
}
