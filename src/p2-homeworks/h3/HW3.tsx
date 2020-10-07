import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from 'uuid';
import hw from './HW3.module.css';
import AlternativeGreeting from "./AlternativeGreeting";

// types
export type UserType = {
	_id: string
	name: string
}

function HW3() {
	const [users, setUsers] = useState<Array<UserType>>([]);

	const addUserCallback = (name: string) => {
		let newUser: UserType = {
			_id: v1(),
			name: name.toUpperCase()
		}
		const newArrayOfUsers = [newUser, ...users]
		setUsers(newArrayOfUsers);
	}

	return (
		<div className={hw.container}>
			<hr/>
			<p className={hw.title}>Homeworks 3</p>
			<GreetingContainer users={users} addUserCallback={addUserCallback}/>

			<hr/>

			<AlternativeGreeting users={users}/>
			<hr/>
		</div>
	);
}

export default HW3;
