import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react';
import './SuperRadio.css';
type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
	options?: string[]
	onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
	{
		type, name,
		options, value,
		onChange, onChangeOption,
		...restProps
	}
) => {
	const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
		// onChange, onChangeOption
    onChangeOption && onChangeOption(event.currentTarget.value)
	}

  // name, checked, value, onChange
	const mappedOptions = options ? options.map((o, i) => (
		<label className='label' key={name + '-' + i} >
			<input
				type={name}
				value={o}
				name={o}
        checked={o === value}
				onChange={onChangeCallback}
				className='option-input radio'
				/>
			{o}
		</label>
	)) : [];

	return (
		<div className='wrap'>
			{mappedOptions}
		</div>
	);
}

export default SuperRadio;
