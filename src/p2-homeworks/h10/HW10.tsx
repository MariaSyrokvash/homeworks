import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import hw10 from './HW10.module.css';
import Loader from '../../common/Loader/Loader';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {setLoadingAC} from './bll/loadingReducer';

function HW10() {
	const loading = useSelector((state: AppStoreType) => state.loading.loading)
	const dispatch = useDispatch();


	const setLoading = () => {
		dispatch(setLoadingAC(true))
		setTimeout(() => {
			dispatch(setLoadingAC(false))
		}, 2000)
	};


	return (
		<div className={hw10.box}>
			<hr/>
			<p className={hw10.title}>Homeworks 10</p>

			{loading
				? (
					<div>
						<Loader/>
					</div>
				) : (
					<div>
						<SuperButton onClick={setLoading}>set loading...</SuperButton>
					</div>
				)
			}

			<hr/>
			{/*для личного творчества, могу проверить*/}
			{/*<Alternative/>*/}
			<hr/>
		</div>
	);
}

export default HW10;
