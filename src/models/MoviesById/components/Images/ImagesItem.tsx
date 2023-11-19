import cl from './Images.module.scss'

import React from 'react'
import { IMages } from 'types/IMages'

interface ImagesItemProps {
	item: IMages
	handleVisble: (item: any, imagesRef: any) => any
}

export const ImagesItem = React.forwardRef<HTMLDivElement, ImagesItemProps>(
	(props, imagesRef) => {
		return (
			<div
				ref={imagesRef}
				onClick={() => props.handleVisble(props.item, imagesRef)}
				className={cl.item}
			>
				<img src={props.item.url} alt='images' />
			</div>
		)
	}
)
