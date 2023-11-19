export interface IAwardsNomination {
	award: { title: string; year: number }
	title: string
}

export interface IAwards {
	nomination: IAwardsNomination
	winning: boolean
	personId?: number
	moviedId?: number
	movie?: { id: number; name: string; rating: number }
}
