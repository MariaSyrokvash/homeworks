const initState = {
    loading: false
};


type initStateType = {
    loading: boolean
}

const SET_LOADER = 'SET_LOADER';

export const loadingReducer = (state: initStateType = initState, action: ActionType): initStateType => {
    switch (action.type) {
        case SET_LOADER: {
            return {...state, loading: action.loading};
        }
        default: return state;
    }
};

export const setLoadingAC = (loading: boolean) => ({type: SET_LOADER, loading } as const)
type setLoadingACType = ReturnType<typeof setLoadingAC>
type ActionType = setLoadingACType