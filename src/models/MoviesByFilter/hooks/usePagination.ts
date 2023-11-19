import { useEffect } from 'react'
import { IMovies } from 'types/IMovies'

export const usePagination = (
	paginationRef: HTMLDivElement | null | any,
	movies: IMovies[],
	setCountPaginatoinLimit: (num: number) => void
) => {
	useEffect(() => {
		if (paginationRef?.current) {
			const observer: any = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					setCountPaginatoinLimit(15)
					observer.unobserve(paginationRef?.current)
				}
			}, {})
			observer && observer.observe(paginationRef?.current)
		}
	}, [movies])
}
