import React, {ChangeEvent, useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import hw11 from './HW11.module.css';
import s from './common/c7-SuperRange/SuperRange.module.css';
import './slider_materialUI.css';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		width: 300,
		display: 'flex',
		alignItems: 'center'
	},
});

export type doubleRange = Array<number>

function HW11() {
	const classes = useStyles();


	const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(100);
	const [doubleRange, setDoubleRange] = React.useState<doubleRange>([15, 60]);
	const [value3, setValue3] = React.useState<number[]>([10, 50]);
	const handleChange = (event: any, newValue: number | number[]) => {
		setValue3(newValue as number[]);
	};

	return (
		<div className={hw11.box}>
			<hr/>
			<p className={hw11.title}>Homeworks 11</p>


			<div className={s.range_box}>
        <p className={s.value1}>{value1}</p>
				<p className={s.min}>0</p>
				<SuperRange
          setValue1={setValue1}
          value1={value1}
					// сделать так чтоб value1 изменялось
				/>
        <p className={s.max}>100</p>
			</div>



			<div className={s.range_box}>
				<SuperDoubleRange
					value1={value1}
					value2={value2}
					doubleRange={doubleRange}
					// сделать так чтоб value1 и value2 изменялось
				/>
			</div>

			<hr/>
			{/*для личного творчества, могу проверить*/}
			{/*<AlternativeSuperRange/>*/}
			{/*<AlternativeSuperDoubleRange/>*/}

			<div className={classes.root}>
				<p className={hw11.start}>{0}</p>
				<Slider
					value={value3}
					onChange={handleChange}
					valueLabelDisplay="auto"
					aria-labelledby="range-slider"
				/>
				<p className={hw11.end}>{100}</p>
			</div>
			<hr/>
		</div>
	);
}

export default HW11;
