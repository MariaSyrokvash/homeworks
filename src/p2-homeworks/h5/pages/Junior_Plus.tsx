import React from "react";
import HW7 from '../../h7/HW7';
import HW8 from '../../h8/HW8';
import hw from '../../h2/HW2.module.css';


function Junior_Plus() {
	return (
		<div>
			<p className={hw.title}>Homeworks 7</p>
			<HW7/>
			<p className={hw.title}>Homeworks 8</p>
			<HW8/>
		</div>
	);
}

export default Junior_Plus;