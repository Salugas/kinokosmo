export const convertTypeMovie = (typeNumber: number | undefined) => {
	let typeMovie = ''

	switch (typeNumber) {
		case 1:
			typeMovie = 'фильм'
			break
		case 2:
			typeMovie = 'сериал'
			break
		case 3:
			typeMovie = 'мультфильм'
			break
		case 4:
			typeMovie = 'аниме'
			break
		case 5:
			typeMovie = 'мультсериал'
			break
		case 6:
			typeMovie = 'ТВ шоу'
			break
	}

	return typeMovie
}
