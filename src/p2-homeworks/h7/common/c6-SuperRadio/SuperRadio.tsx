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
    // const currentValue = event.target.value;
    console.log(event.target.checked)
    onChangeOption && onChangeOption(event.currentTarget.value)


	}
	console.log(value)
  // name, checked, value, onChange
	const mappedOptions = options ? options.map((o, i) => (
		<label key={name + '-' + i}>
			<input
				type={name}
				value={o}
				name={o}
        checked={o === value}
				onChange={onChangeCallback}
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
