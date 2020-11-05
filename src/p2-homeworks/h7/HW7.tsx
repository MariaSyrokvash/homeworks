import React, {useState} from 'react';
import './HW7.css';
import SuperSelect from './common/c5-SuperSelect/SuperSelect';
import SuperRadio from './common/c6-SuperRadio/SuperRadio';

const arr: string[] = ['x', 'y', 'z'];

function HW7() {
	const [value, onChangeOption] = useState(arr[0]);

	return (
		<div className='container'>
			<hr/>
			<p className='hw'>Homeworks 7</p>

			<div>
				<SuperSelect
					options={arr}
					value={value}
					onChangeOption={onChangeOption}
				/>
			</div>
			<div>
				<SuperRadio
					name={'radio'}
					options={arr}
					value={value}
					onChangeOption={onChangeOption}
				/>
			</div>

			<hr/>
			{/*для личного творчества, могу проверить*/}
			{/*<AlternativeSuperSelect/>*/}
			{/*<AlternativeSuperRadio/>*/}
			<hr/>
		</div>
	);
}

export default HW7;
