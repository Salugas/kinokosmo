import cl from './Movies.module.scss'

import { FC } from 'react'
import { breakpoints } from '../../utils/breakpoints'
import { IMovies } from 'types/IMovies'
import { MoviesItem } from './MoviesItem'
import { Swipers } from 'components/Swiper/Swipers'
import { SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

interface MoviesListProps {
	movies: IMovies[] | undefined
}

export const MoviesList: FC<MoviesListProps> = ({ movies }) => {
	return (
		<div>
			<Swipers
				breakpoints={breakpoints}
				navigation
				slidesPerView={1.8}
				spaceBetween={20}
				loop={true}
				centeredSlides={true}
				initialSlide={3}
			>
				{movies &&
					movies.map(item => (
						<SwiperSlide>
							<Link to={`movies/${item.id}`}>
								<MoviesItem item={item} />
							</Link>
						</SwiperSlide>
					))}
			</Swipers>
		</div>
	)
}
