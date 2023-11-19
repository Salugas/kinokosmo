import cl from './Facts.module.scss'
import './FactsLinks.scss'
import { FC, useEffect, useRef } from 'react'
import { IMoviesFacts } from '../../types/IFacts'

interface FactsItemProps {
	item: IMoviesFacts
	statePagination: number
}

export const FactsItem: FC<FactsItemProps> = ({ item, statePagination }) => {
	const factsRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (factsRef.current) {
			factsRef.current.insertAdjacentHTML('beforeend', item.value + ``)
		}
	}, [statePagination])

	return <div ref={factsRef} className={cl.facts__item}></div>
}
