import cl from './Persons.module.scss'

import { FC } from 'react'

import { breakpoints } from './utils/breakpoints'
import { PersonsItem } from './PersonsItem'
import { IMoviesPersons } from '../../../../types/IMovies'

import { SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Swipers } from 'components/Swiper/Swipers'
import Container from 'components/Сontainer/Container'

interface PersonsListProps {
	persons: IMoviesPersons[] | undefined
}

export const PersonsList: FC<PersonsListProps> = ({ persons }) => {
	return (
		<Container left>
			<div className={cl.wrapper}>
				<div className={cl.title}>{'Актеры и создатели'}</div>

				<div className={cl.person__list}>
					<Swipers breakpoints={breakpoints} slidesPerView={7} spaceBetween={1}>
						{persons &&
							persons.map(item => (
								<SwiperSlide key={item.id}>
									<Link to={`/persons/${item.id}`}>
										<PersonsItem item={item} />
									</Link>
								</SwiperSlide>
							))}
					</Swipers>
				</div>
			</div>
		</Container>
	)
}
