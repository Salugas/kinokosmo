import cl from './Movies.module.scss'

import { breakpoints } from '../../utils/breakpoints'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { FC } from 'react'
import { IMovies } from 'types/IMovies'
import { MoviesItem } from './MoviesItem'
import { SwiperSlide } from 'swiper/react'
import { Swipers } from 'components/Swiper/Swipers'
import { IGenres } from 'types/IField'
import { Link } from 'react-router-dom'
import { GenresMoviesAPI } from '../../API/GenresMoviesAPI'
import { useActions } from 'hooks/useActions'

interface MoviesListProps {
	genre: IGenres
}

export const MoviesList: FC<MoviesListProps> = ({ genre }) => {
	const { data } = GenresMoviesAPI.useFetchGenresMoviesQuery(genre.name)
	const { docs: movies }: any = { ...data }

	console.log(movies)
	console.log(genre.name)

	const { setFilterGenre, setResetFilters } = useActions()

	return (
		<div className={cl.wrapper} onClick={() => setFilterGenre(genre.name)}>
			<div className={cl.title}>
				<Link
					onClick={() => setResetFilters()}
					className={cl.genre}
					to={genre.slug == 'anime' ? `anime` : `movie`}
				>
					<div>{genre?.name}</div>
					<div className={cl.arrow}>
						<AiOutlineDoubleRight className={cl.icon} />
					</div>
				</Link>
			</div>
			<div>
				<Swipers breakpoints={breakpoints} spaceBetween={0} slidesPerView={5}>
					{movies &&
						movies.map((item: IMovies) => (
							<SwiperSlide>
								<div className={cl.poster}>
									<MoviesItem key={item.id} item={item} />
								</div>
							</SwiperSlide>
						))}
				</Swipers>
			</div>
		</div>
	)
}
