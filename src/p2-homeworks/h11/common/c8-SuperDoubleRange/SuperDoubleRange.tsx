import React, {ChangeEvent} from 'react';
import './SuperDoubleRange.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-slider/assets/index.css';
import SuperRange from '../c7-SuperRange/SuperRange';
import {doubleRange} from '../../HW11';

const {createSliderWithTooltip} = Slider;
const Range = createSliderWithTooltip(Slider.Range);

type SuperDoubleRangePropsType = {
	onChangeRange?: (value: [number, number]) => void
	value?: [number, number]
	value1: number
	value2: number
	doubleRange: doubleRange
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
	{
		value1,
		value2,
		doubleRange,
		onChangeRange, value,
		// min, max, step, disable, ...
	}
) => {

	// сделать самому, можно подключать библиотеки

	return (
		<>
			<div className="sliderArea">
				<Range
					marks={{
						0: `0$`,
						100: `100$`
					}}
					min={value1}
					max={value2}
					defaultValue={doubleRange}
					tipFormatter={value => `${value}$`}
					tipProps={{
						placement: 'top',
						visible: true
					}}
				/>
			</div>

		</>
	);
}

export default SuperDoubleRange;
