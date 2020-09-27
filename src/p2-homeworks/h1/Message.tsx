import React from "react";
import message from './Message.module.css';

type MessageType = {
	avatar: string
	name: string
	message: string
	time: string
}

function Message(props: MessageType) {
	return (
		<div className={message.message}>
			<div className={message.message__container}>
				<img src={props.avatar} className={message.message__img} alt='avatar'/>
				<div>
					<div className={message.triangle}></div>
				</div>
				<div className={message.message__inner}>
					<p className={message.message__name}>{props.name}</p>
					<p className={message.message__content}>{props.message}</p>
					<p className={message.message__time}>{props.time}</p>
				</div>
			</div>
		</div>
	);
}

export default Message;
