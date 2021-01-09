import React, {ChangeEvent, useState} from 'react';
import './Request.css'
import {requestAPI} from './api';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../../h10/bll/store';
import {setLoadingAC} from '../../h10/bll/loadingReducer';
import Loader from '../../../common/Loader/Loader';

export const Request = () => {
	const dispatch = useDispatch()
	const loading = useSelector<AppStoreType, boolean>((state) => state.loading.loading)
	const [value, setValue] = useState<boolean>(false)
	const [correctAnswer, setAnswer] = useState<string>('')
	const [errorAnswer, setErrorAnswer] = useState<string>('')
	const [error, setError] = useState<boolean>(false)


	const onClickHandler = () => {
		dispatch(setLoadingAC(true))
		requestAPI.testRequest(value)
			.then(response => {
				setAnswer(response.data.errorText)
				setError(false)
			})
			.catch(err => {
				setErrorAnswer(err.response.data.errorText)
				setError(true)
			})
			.finally(() => {
				dispatch(setLoadingAC(false))
			})
	}

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.checked)

	console.log(loading)

	return (
		<div className='request-box'>
			{loading && <Loader /> }

			<div className='request-inner'>
				<button className='request-btn' onClick={onClickHandler}>Click</button>
				<input type='checkbox' className='request-checkbox' checked={value} onChange={onChangeHandler}/>
			</div>



			<div className='errorAnswer'>{error && errorAnswer}</div>
			<div className='correctAnswer'>{!error && correctAnswer}</div>
		</div>
	);
}


