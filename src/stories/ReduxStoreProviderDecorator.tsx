import {Provider} from 'react-redux';
import React from 'react';
import {combineReducers, createStore} from 'redux';
import {loadingReducer} from '../p2-homeworks/h10/bll/loadingReducer';
import {themeReducer} from '../p2-homeworks/h12/bll/themeReducer';

const rootReducer = combineReducers({
	loading: loadingReducer,
	theme: themeReducer
})

const initialGlobalState = {
	loading: false,
	color: 'green'
};

type initialGlobalStateType = {
	loading: boolean,
	color: string
};


export const storyBookStore = createStore(rootReducer, initialGlobalState as any);


export const ReduxStoreProviderDecorator = (storyFn: any) => {
	return <Provider store={storyBookStore}> {storyFn()} </Provider>
}