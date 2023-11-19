import { useAppSelector } from 'hooks/redux'

import { ModalSeachMovie } from '../../models/ModalSeachMovie'
import { RegistrationForm } from 'models/RegistrationForm'

export const Visble = () => {
	const {
		visbleRigistration,
		visbleSearch,
		visbleImages,
		visbleMobileNavigation
	} = useAppSelector(state => state.visbleModalReducer)

	if (
		visbleRigistration ||
		visbleSearch ||
		visbleImages ||
		visbleMobileNavigation
	) {
		document.body.style.cssText = 'overflow-y : hidden'
	} else {
		document.body.style.cssText = 'overflow-y : scroll'
	}

	return (
		<>
			{visbleRigistration && <RegistrationForm />}

			{visbleSearch && <ModalSeachMovie />}
		</>
	)
}
