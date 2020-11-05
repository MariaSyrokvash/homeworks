import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react';
import './SuperSelect.css';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
	options?: string[]
	onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
	{
		options,
		onChange, onChangeOption,
		...restProps
	}
) => {

	const mappedOptions: JSX.Element[] | undefined = options?.map((option, index) => {
		return <option key={index} value={option}>{option}</option>
	})

	const onChangeCallback = (event: ChangeEvent<HTMLSelectElement>) => {
		const currentValue = event.target.value;
		onChangeOption && onChangeOption(currentValue);
	}

	return (
		<>
			<label htmlFor="variables" className='label'>Choose a variable:</label>
			<select onChange={onChangeCallback} {...restProps} name='variables' className='select minimal'>
				{mappedOptions}
			</select>
		</>
	);
}

export default SuperSelect;
