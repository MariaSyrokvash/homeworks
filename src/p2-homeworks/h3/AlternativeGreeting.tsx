import React from "react";
import {UserType} from "./HW3";
import alt from './AlternativeGreeting.module.css';

type AlternativeGreeting = {
    users: Array<UserType>
}

function AlternativeGreeting(props: AlternativeGreeting) {
    console.log(props.users.length)


    const result = props.users.map(user => user.name);
    console.log(result)

    const someInfo = `Names: ${result}`;
    return (
        <div>
            <p className={alt.message}>{props.users.length ? someInfo : ''}</p>
        </div>
    );
}

export default AlternativeGreeting;
