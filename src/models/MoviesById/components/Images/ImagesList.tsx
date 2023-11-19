import cl from './Images.module.scss'

import { FC } from 'react'
import { IMages } from 'types/IMages'
import { ImagesItem } from './ImagesItem'

import { Swipers } from 'components/Swiper/Swipers'
import { SwiperSlide } from 'swiper/react'

import { useActions } from 'hooks/useActions'
import { breakpoints } from './utils/breakpoints'

interface ImagesListProps {
	images: IMages[] | undefined
}

export const ImagesList: FC<ImagesListProps> = ({ images }) => {
	const { setImagesUrl, setVisbleImages } = useActions()

	const handleVisble = (item: IMages) => {
		setVisbleImages(true)
		setImagesUrl(item.url)
	}

	return (
		<div className={cl.wrapper}>
			<Swipers
				loop
				breakpoints={breakpoints}
				spaceBetween={1}
				slidesPerView={2}
			>
				{images &&
					images.map(item => (
						<SwiperSlide>
							<ImagesItem
								item={item}
								handleVisble={() => handleVisble(item)}
								key={item.movieId}
							/>
						</SwiperSlide>
					))}
			</Swipers>
		</div>
	)
}
