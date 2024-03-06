export const breakpointsCounter = (length?: number) => {
	const breakpoints = {
		1024: { slidesPerView: length },
		767: { slidesPerView: length },
		500: { slidesPerView: 1 },
		375: { slidesPerView: 1 },
		0: { slidesPerView: 1 }
	}

	return breakpoints
}
