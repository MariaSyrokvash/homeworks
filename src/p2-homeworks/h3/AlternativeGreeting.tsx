import React from "react";
import {UserType} from "./HW3";
import alt from './AlternativeGreeting.module.css';

type AlternativeGreeting = {
    users: Array<UserType>
}

function AlternativeGreeting(props: AlternativeGreeting) {

    const result = props.users.map(user => user.name);

    const someInfo = `Names: ${result}`;
    return (
        <div>
            <p className={alt.message}>{props.users.length ? someInfo : ''}</p>
        </div>
    );
}

export default AlternativeGreeting;
