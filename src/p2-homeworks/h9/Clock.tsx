import React, {useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import hw9 from './HW9.module.css';

function Clock() {
	const [timerId, setTimerId] = useState<number>(0);
	const [date, setDate] = useState<Date>(new Date());
	const [show, setShow] = useState<boolean>(false);

	const stop = () => {
		clearInterval(timerId);
	}

	const start = () => {
		stop();
		const id: number = window.setInterval(() => {
			setDate(new Date())
		}, 1000);
		setTimerId(id);
	}


	const onMouseEnter = () => {
		setShow(true)
	};
	const onMouseLeave = () => {
		setShow(false)
	};


	const stringTime = timerId === 0 ? `Please, click start` : date.toLocaleTimeString();
	const stringDate = date.toLocaleDateString();

	return (
		<div className={hw9.box}>
			<div className={hw9.time}
					 onMouseEnter={onMouseEnter}
					 onMouseLeave={onMouseLeave}
			>
				{stringTime}
			</div>
			{show && (
				<div className={`${hw9.date} ${hw9.slide_fwd_right}`}> {stringDate} </div>
			)}
			<div className={hw9.container}>
				<SuperButton onClick={start}>start</SuperButton>
				<SuperButton onClick={stop}>stop</SuperButton>
			</div>

		</div>
	);
}

export default Clock;
