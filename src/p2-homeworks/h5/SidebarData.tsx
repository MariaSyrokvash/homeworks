import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';


export const SidebarData = [
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text'
	},
	{
		title: 'PreJunior',
		path: '/pre-junior',
		icon: <FaIcons.FaRegMeh />,
		cName: 'nav-text'
	},
	{
		title: 'Junior',
		path: '/junior',
		icon: <FaIcons.FaRegMehBlank />,
		cName: 'nav-text'
	},
	{
		title: 'Junior Plus',
		path: '/plus-junior',
		icon: <FaIcons.FaRegLaugh />,
		cName: 'nav-text'
	}
];