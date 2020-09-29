import React from "react";
import {AffairType} from "./HW2";
import affair from './Affair.module.css';

type AffairPropsType = {
	affair: AffairType
	deleteAffairCallback: (id: string) => void
}

function Affair(props: AffairPropsType) {

	const taskName = props.affair;

	return (
		<div data-id={taskName._id} className={affair.affair}>
			<p className={affair.name}>{taskName.name}</p>
			<button className={affair.btn}
							onClick={() => {props.deleteAffairCallback(taskName._id)}}>
				X
			</button>
		</div>
	);
}

export default Affair;
