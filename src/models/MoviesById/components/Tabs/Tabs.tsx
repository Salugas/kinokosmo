import cl from './Tabs.module.scss'
import styled from 'styled-components'

import { FC, useState } from 'react'
import { IMages } from 'types/IMages'
import { ImagesList } from '../Images/ImagesList'
import Container from 'components/Сontainer/Container'

interface TabsProps {
	description: string | undefined
	images: IMages[] | undefined
}

export const Tabs: FC<TabsProps> = ({ description, images }) => {
	const [visbleDescription, setVisbleDescription] = useState(true)
	const [visbleImages, setVisbleImages] = useState(false)

	const StyledOptionsDescription = styled.div`
		${visbleDescription && 'color: white;'}
		&::after {
			${visbleDescription && 'background-color: rgb(0, 40, 171);'}
		}
	`

	const StyledOptionsImages = styled.div`
		${visbleImages && 'color: white;'}
		&::after {
			${visbleImages && 'background-color: rgb(0, 40, 171);'}
		}
	`

	const handleVisble = (state: boolean) => {
		if (state === false) {
			setVisbleDescription(true)
			setVisbleImages(false)
		} else {
			setVisbleDescription(false)
			setVisbleImages(true)
		}
	}

	return (
		<div>
			<Container center>
				<div className={cl.wrapper}>
					<div className={cl.options}>
						<StyledOptionsDescription
							onClick={() => handleVisble(false)}
							className={cl.options__description}
						>
							<>{'Описание'}</>
						</StyledOptionsDescription>
						<StyledOptionsImages
							onClick={() => handleVisble(true)}
							className={cl.options__image}
						>
							<>{'Изображение'}</>
						</StyledOptionsImages>
					</div>

					<div className={cl.info}>
						{visbleDescription && (
							<div className={cl['description-info']}>{description}</div>
						)}
						{visbleImages && <ImagesList images={images} />}
					</div>
				</div>
			</Container>
		</div>
	)
}
