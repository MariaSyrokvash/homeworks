import React, {useState} from "react";
import Affairs from "./Affairs";
import hw from './HW2.module.css';
import AlternativeAffairs from "./AlternativeAffairs";
import {v1} from "uuid";

// types
export type AffairPriorityType = 'high' | 'middle' | 'low';
export type FilterType = "all" | AffairPriorityType;
export type AffairType = {
	_id: string
	name: string
	priority: string
};

// constants
const defaultAffairs: Array<AffairType> = [
	{_id: v1(), name: "React", priority: "high"},
	{_id: v1(), name: "anime", priority: "low"},
	{_id: v1(), name: "games", priority: "low"},
	{_id: v1(), name: "work", priority: "high"},
	{_id: v1(), name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
	let filteredAffairs = affairs;
	if (filter === "all")	{
		return affairs;
	} else if (filter === 'high') {
		filteredAffairs = filteredAffairs.filter(affair => affair.priority === 'high')
	} else if (filter === 'middle') {
		filteredAffairs = filteredAffairs.filter(affair => affair.priority === 'middle')
	} else if (filter === 'low') {
		filteredAffairs = filteredAffairs.filter(affair => affair.priority === 'low')
	}
	return  filteredAffairs;
}

export const deleteAffair = (affairs: Array<AffairType>, _id: string): Array<AffairType> => {
	let filteredTasks = affairs.filter(affair => affair._id !== _id);
	return filteredTasks;
}

function HW2() {

	const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
	const [filter, setFilter] = useState<FilterType>("all");

	const filteredAffairs = filterAffairs(affairs, filter);
	const deleteAffairCallback = (_id: string) => setAffairs(deleteAffair(affairs, _id));

	const addNewTask = (title: string) => {
		let templateNewOfAffair: AffairType = {
			_id: v1(),
			name: title,
			priority: 'low'
		}

		const newArrayOfAffairs = [templateNewOfAffair, ...affairs];
		setAffairs(newArrayOfAffairs);
	}

	return (
		<div className={hw.wrapper}>
			<p className={hw.title}>Homeworks 2</p>

			<Affairs
				data={filteredAffairs}
				setFilter={setFilter}
				deleteAffairCallback={deleteAffairCallback}
			/>

			<AlternativeAffairs
				addNewTask={addNewTask}
			/>
			<hr/>
		</div>
	);
}

export default HW2;
