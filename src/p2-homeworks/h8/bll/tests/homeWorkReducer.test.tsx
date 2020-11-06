import React from 'react';
import {homeWorkReducer, SortAgeAC, SortDownAC, SortUpAC} from '../homeWorkReducer';

let initialState: ObjStateType[];

export type ObjStateType = {
	_id: number
	name: string
	age: number
}

beforeEach(() => {
	initialState = [
		{_id: 0, name: 'Кот', age: 3},
		{_id: 1, name: 'Александр', age: 66},
		{_id: 2, name: 'Коля', age: 16},
		{_id: 3, name: 'Виктор', age: 44},
		{_id: 4, name: 'Дмитрий', age: 40},
		{_id: 5, name: 'Ирина', age: 55},
	]
});

test('sort name up', () => {
	const newState = homeWorkReducer(initialState, SortUpAC());

	expect(newState[0].name).toBe('Александр');
	expect(newState[5].age).toBe(3);
});
test('sort name down', () => {
	const newState = homeWorkReducer(initialState, SortDownAC());

	expect(newState[0].name).toBe('Кот');
	expect(newState[1].name).toBe('Коля');
	expect(newState[5].age).toBe(66);
});
test('check age more than 18', () => {
	const newState = homeWorkReducer(initialState, SortAgeAC());

	expect(newState.length).toBe(4);
	expect(newState[0].name).toBe('Александр');
	expect(newState[3].age).toBe(55);
});
