import cl from './Genres.module.scss'
import Container from 'components/Сontainer/Container'

import { FC } from 'react'

import { breakpoints } from '../../utils/breakpoints'

import { GenresAPI } from '../../API/GenresAPI'

import { GenresItem } from './GenresItem'

import { IGenres } from 'types/IField'

import { Swipers } from 'components/Swiper/Swipers'
import { SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

import { useActions } from 'hooks/useActions'

export const GenresList: FC = () => {
	const { setResetFilters, setFilterGenre } = useActions()

	const { data: genres } = GenresAPI.useFetchGenresQuery('')

	const setFilters = (genre: string) => {
		setResetFilters()
		setFilterGenre(genre)
	}

	return (
		<Container left>
			<div className={cl.wrapper}>
				<Swipers
					breakpoints={breakpoints}
					spaceBetween={30}
					slidesPerView={'auto'}
				>
					{genres &&
						genres.map((genre: IGenres) => (
							<SwiperSlide style={{ width: 'auto' }}>
								<Link
									onClick={() => setFilters(genre.name)}
									to={genre.slug == 'anime' ? `anime` : `movie`}
								>
									<GenresItem key={genre.slug} genre={genre} />
								</Link>
							</SwiperSlide>
						))}
				</Swipers>
			</div>
		</Container>
	)
}
