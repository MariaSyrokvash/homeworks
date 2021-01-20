import React from 'react';
import s from './App.module.css';
import HW1 from '../../../p2-homeworks/h1/HW1';
import HW2 from '../../../p2-homeworks/h2/HW2';
import HW3 from '../../../p2-homeworks/h3/HW3';
import HW4 from '../../../p2-homeworks/h4/HW4';
import HW5 from '../../../p2-homeworks/h5/HW5';
import HW7 from '../../../p2-homeworks/h7/HW7';
import HW8 from '../../../p2-homeworks/h8/HW8';
import HW9 from '../../../p2-homeworks/h9/HW9';
import HW10 from '../../../p2-homeworks/h10/HW10';
import {Provider} from 'react-redux';
import HW12 from '../../../p2-homeworks/h12/HW12';
import {store} from '../../../p2-homeworks/h10/bll/store';

function App() {
	return (
		<Provider store={store}>
			<div className={s.App}>
				<div className={s.title}>React homeworks:</div>
				{/*<HW1/>*/}
				{/*<HW2/>*/}
				{/*<HW3/>*/}
				{/*<HW4/>*/}
				<HW5/>
				<HW7/>
				<HW8/>
				<HW9/>
				<HW10/>
				<HW12 />
			</div>
		</Provider>

	);
}

export default App;
