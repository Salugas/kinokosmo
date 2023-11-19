import React, { useRef } from 'react'

export const usePaginations = (childRef: HTMLDivElement) => {
	const limit = 10

	const observer = React.createRef<unknown>()

	const options = {
		roor: '',
		rootMargin: '0rem',
		threshold: 0
	}
}
