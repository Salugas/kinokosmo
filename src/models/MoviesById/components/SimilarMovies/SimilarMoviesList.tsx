import cl from './SimilarMovies.module.scss'

import { FC } from 'react'

import { breakpoints } from './utils/breakpoints'
import { IMoviesSimilar } from '../../../../types/IMovies'
import { SimilarMoviesItem } from './SimilarMoviesItem'

import { SwiperSlide } from 'swiper/react'
import { Swipers } from 'components/Swiper/Swipers'
import Container from 'components/Сontainer/Container'

interface SimilarMoviesListProps {
	similarMovies: IMoviesSimilar[] | undefined
}
export const SimilarMoviesList: FC<SimilarMoviesListProps> = ({
	similarMovies
}) => {
	return (
		<Container left>
			<div className={cl.wrapper}>
				{similarMovies?.length !== 0 && (
					<div className={cl.title}>{'Похожее'}</div>
				)}

				<div className={cl.movies}>
					<Swipers breakpoints={breakpoints} slidesPerView={4} spaceBetween={0}>
						{similarMovies &&
							similarMovies.map(item => (
								<SwiperSlide key={item.id}>
									<div className={cl.poster}>
										<SimilarMoviesItem item={item} />
									</div>
								</SwiperSlide>
							))}
					</Swipers>
				</div>
			</div>
		</Container>
	)
}
