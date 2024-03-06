import 'swiper/css'
import { Swiper } from 'swiper/react'
import { FC, PropsWithChildren } from 'react'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'

interface SwipersProps {
	spaceBetween?: number
	slidesPerView?: number | 'auto'
	loop?: boolean | undefined
	centeredSlides?: boolean
	initialSlide?: number
	navigation?: boolean

	breakpoints: {}
}

export const Swipers: FC<PropsWithChildren<SwipersProps>> = ({
	children,
	slidesPerView,
	spaceBetween,
	loop,
	centeredSlides,
	initialSlide,
	breakpoints
}) => {
	return (
		<Swiper
			breakpoints={breakpoints}
			centeredSlides={centeredSlides}
			spaceBetween={spaceBetween}
			slidesPerView={slidesPerView}
			loop={loop}
			speed={400}
			initialSlide={initialSlide}
		>
			{children}
		</Swiper>
	)
}
