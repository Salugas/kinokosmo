export interface ISeasonEpisodes {
	number: number
	name: string
	enName: string
	description: string
	date: string
}

export interface ISeason {
	movieId: number
	number: number
	episodesCount: number
	episodes: ISeasonEpisodes[]
}
