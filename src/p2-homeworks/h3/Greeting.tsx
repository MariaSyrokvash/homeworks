import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
	name: string
	setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
	addUser: () => void
	error: string
	totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
	{name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
	const inputClass = s.error; // need to fix with (?:)

	return (
		<div>
			<div className={s.wrap}>
				<input value={name} onChange={setNameCallback} className={error ? inputClass : ''}/>
				<button onClick={addUser} className={s.btn}>add</button>
				<p className={s.total}>{totalUsers}</p>
			</div>
				<p className={s.text}>{error}</p>
		</div>
	);
}

export default Greeting;
