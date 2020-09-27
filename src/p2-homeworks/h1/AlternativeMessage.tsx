import React from "react";
import form from './AlternativeMessage.module.css';

type AlternativeMessageType = {
	clipPaperIcon: string
	placeholderText: string
	sendBtnIcon: string
}

function AlternativeMessage(props: AlternativeMessageType) {
	return (
		<div className={form.container}>
			<form className={form.form}>
				<div className={form.form__upload}>
					<button className={form.form__btn}>
						<img className={form.paperclip} src={props.clipPaperIcon}/>
					</button>
					<input type="file" name="myfile"/>
				</div>
				<input type="text" name="" placeholder={props.placeholderText}/>
					<button className={form.form__send}>
						<img className={form.send__icon} src={props.sendBtnIcon}/>
					</button>
			</form>
		</div>
	);
}

export default AlternativeMessage;
