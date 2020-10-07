import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import affairs from './Affairs.module.css';

type AffairsPropsType = { // need to fix any
	data: Array<AffairType>
	setFilter: (value: FilterType) => void
	deleteAffairCallback: (id: string) => void
}

function Affairs(props: AffairsPropsType) {

	const mappedAffairs = props.data.map((a: AffairType) => (
		<Affair
			key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
			affair={a}
			deleteAffairCallback={props.deleteAffairCallback}
		/>
	))

	const setAll = () => {
		props.setFilter('all')
	};
	const setHigh = () => {
		props.setFilter('high')
	};
	const setMiddle = () => {
		props.setFilter('middle')
	};
	const setLow = () => {
		props.setFilter('low')
	};

	return (
		<div className={affairs.container}>
			{mappedAffairs}
			<div className={affairs.btns}>
				<button onClick={setAll} className={`${affairs.btn} ${affairs.all}`}>All</button>
				<button onClick={setHigh} className={`${affairs.btn} ${affairs.high}`}>High</button>
				<button onClick={setMiddle} className={`${affairs.btn} ${affairs.middle}`}>Middle</button>
				<button onClick={setLow} className={`${affairs.btn} ${affairs.low}`}>Low</button>
			</div>

		</div>
	);
}

export default Affairs;
