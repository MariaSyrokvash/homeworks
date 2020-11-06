import {ObjStateType} from './tests/homeWorkReducer.test';

type SortUpActionType = {
	type: 'sort'
	payload: 'up'
}

type SortDownActionType = {
	type: 'sort'
	payload: 'down'
}

type SortAgeActionType = {
	type: 'check_age'
	payload: number
}

export const SortUpAC = (): SortUpActionType => {
	return {type: 'sort', payload: 'up'}
}

export const SortDownAC = (): SortDownActionType => {
	return {type: 'sort', payload: 'down'}
}

export const SortAgeAC = (): SortAgeActionType => {
	return {type: 'check_age', payload: 18}
}

type ActionsType = SortUpActionType | SortDownActionType | SortAgeActionType

export const homeWorkReducer = (state: ObjStateType[], action: ActionsType): ObjStateType[] => {
	switch (action.type) {
		case 'sort': {
			if (action.payload === 'up') {
				state.sort((a: ObjStateType, b: ObjStateType) => {
					if (a.name > b.name) {
						return 1;
					}
					if (a.name < b.name) {
						return -1;
					}
					return 0;
				});
				return [...state]
			}
		}
		case 'sort': {
			if (action.payload === 'down') {
				state.sort((a: ObjStateType, b: ObjStateType) => {
					if (a.name < b.name) {
						return 1;
					}
					if (a.name > b.name) {
						return -1;
					}
					return 0;
				});
				return [...state]
			}

		}
		case 'check_age': {
			return state.filter(person => person.age > action.payload)
		}
		default:
			return state
	}
};