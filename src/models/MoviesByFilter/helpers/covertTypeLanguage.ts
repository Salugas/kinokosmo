export const covertTypeLanguage = (type: string | undefined) => {
	switch (type) {
		case 'movie':
			type = 'фильмы'
			break
		case 'tv-series':
			type = 'сериалы'
			break
		case 'animated-series':
			type = 'мультфильмы'
			break
		case 'anime':
			type = 'аниме'
			break
	}
	return type
}
