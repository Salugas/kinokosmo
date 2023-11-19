import { Rating } from '../../../../components/Rating/Rating'
import cl from './Movies.module.scss'

import { FC } from 'react'
import { useActions } from '../../../../hooks/useActions'
import { ISearch } from '../../../../types/ISearch'
import { calcRating } from '../../../../helpers/calcRating'

interface MoviesItemProps {
	item: ISearch
}

const MoviesItem: FC<MoviesItemProps> = ({ item }) => {
	const { setVisbleSearchModal } = useActions()
	const ratingColor = calcRating(item.rating)

	return (
		<div className={cl.movie} onClick={() => setVisbleSearchModal(false)}>
			<div className={cl.movie__poster}>
				<img src={item.poster} alt='poster' />
			</div>
			<div className={cl.info}>
				<div className={cl.info__name}>{item.name}</div>
				<div className={cl.description}>
					<div className={cl.description__date}>{item.year}</div>
					<Rating backgroundColor={ratingColor} padding={'0.2rem 0.6rem'}>
						{item.rating.toFixed(1)}
					</Rating>
				</div>
			</div>
		</div>
	)
}

export default MoviesItem
