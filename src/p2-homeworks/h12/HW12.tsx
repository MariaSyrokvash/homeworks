import React from 'react';
import s from './HW12.module.css';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import '../h7/common/c5-SuperSelect/SuperSelect.css';
import {useDispatch, useSelector} from 'react-redux';
import {setThemeAC} from '../h10/bll/themeReducer';
import {AppStoreType} from '../h10/bll/store';

const themes = ['dark', 'red', 'green'];

function HW12() {
  const theme = useSelector<AppStoreType, string>(state => state.theme.color)
	const dispatch = useDispatch()
  const onChangeCallback = (theme: string) => dispatch(setThemeAC(theme))

	return (
		<div className={s.box}>
			<div className={`${s[theme]} ${s.wrapper}`}>
        <p className='hw'>Homeworks 12</p>
				<span className={s[theme + '-text']}></span>


				<SuperSelect
          options={themes}
          onChangeOption={onChangeCallback}
          value={theme}
        />
			</div>
	 </div>
	);
}

export default HW12;

