import React from 'react';
import {Meta, Story} from '@storybook/react';
import HW12 from '../p2-homeworks/h12/HW12';
import {ReduxStoreProviderDecorator} from './ReduxStoreProviderDecorator';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../p2-homeworks/h10/bll/store';
import {setThemeAC} from '../p2-homeworks/h12/bll/themeReducer';
import s from '../p2-homeworks/h12/HW12.module.css';
import SuperSelect from '../p2-homeworks/h7/common/c5-SuperSelect/SuperSelect';


export default {
	title: 'HW12/Component',
	component: HW12,
	decorators: [ReduxStoreProviderDecorator]
} as Meta;

//old version
export const HW12BaseExample = () => {
	return 	<HW12 />
}

//new version
const Template: Story = (args) =>  <HW12 />
export const HW12BaseExampleNewVersion = Template.bind({});
HW12BaseExampleNewVersion.args = {

}
