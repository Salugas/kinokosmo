export const calcRating = (rating: number | undefined) => {
	let ratingColor = ''
	if (rating && rating >= 7.9) {
		ratingColor = 'rgba(13, 255, 0, 0.451)'
	}
	if (rating && rating < 7.9 && rating >= 5.5) {
		ratingColor = 'rgba(72, 72, 72, 0.451)'
	}
	if (rating && rating < 5.5 && rating >= 0.5) {
		ratingColor = 'rgba(255, 2, 2, 0.451)'
	}
	return ratingColor
}
