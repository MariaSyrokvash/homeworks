const SET_THEME = 'SET_THEME';

type initStateType = typeof initState

const initState = {
	color: 'green'
};


export const themeReducer = (state: initStateType = initState, action: ActionType): initStateType => {
	switch (action.type) {
		case 'SET_THEME': {
			return {
				...state,
				color: action.color
			}
		}
		default:
			return state;
	}
};

export const setThemeAC = (color: string) => ({type: SET_THEME, color} as const)
type setThemeACType = ReturnType<typeof setThemeAC>
type ActionType = setThemeACType