import { IMoviesFacts } from './IFacts'

export interface IMoviesRating {
	kp: number
	imdb: number
}

export interface IMoviesPoster {
	url: string
	previewUrl: string
}

export interface IMoviesBackdrop {
	url: string
	previewUrl: string
}

export interface IMoviesVideos {
	trailers: IMoviesTraillers[]
	teasers: IMoviesTeasers[]
}

export interface IMoviesTraillers {
	url: string
	name: string
	site: string
	type: string
}

export interface IMoviesTeasers {
	url: string
	name: string
	site: string
	type: string
}

export interface IMoviesBudget {
	value: number
	currency: string
}

export interface IMoviesPremier {
	country: string
	world: string
	russia: string
	digital: string
	cinema: string
}

export interface IMoviesGenres {
	name: string
}

export interface IMoviesSimilar {
	id: number
	name: string
	enName: string
	alternativeNam: string
	type: string
	poster: IMoviesPoster
	rating: number
}

export interface IMoviesPersons {
	id: number
	photo: string
	name: string
	enName: string
	description: string
	profession: string
	enProfession: string
}

export interface IMoviesSeasonsInfo {
	number: number
	episodesCount: number
}

export interface IMovies {
	countries: { name: string }[]
	id: number
	name: string
	enName: string
	type: string
	typeNumber: number
	year: number
	description: string
	shortDescription: string
	slogan: string
	status: string
	movieLength: number
	ageRating: number
	logo: { url: string }
	facts: IMoviesFacts[]
	premier: IMoviesPremier
	persons: IMoviesPersons[]
	videos: IMoviesVideos
	backdrop: IMoviesBackdrop
	poster: IMoviesPoster
	rating: IMoviesRating
	top10: number
	top250: number
	totalSeriesLength: number
	seriesLength: number
	genres: IMoviesGenres[]
	similarMovies: IMoviesSimilar[]
	seasonsInfo: IMoviesSeasonsInfo[]
}
