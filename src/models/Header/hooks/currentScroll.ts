export const currentScroll = (setVisble: (visble: any) => void) => {
	let previousPosition = window.scrollY || document.documentElement.scrollTop

	window.onscroll = function () {
		let currentPosition = window.scrollY || document.documentElement.scrollTop

		if (previousPosition > currentPosition) {
			setVisble(true)
		} else {
			setVisble(false)
		}

		previousPosition = currentPosition
	}
}
