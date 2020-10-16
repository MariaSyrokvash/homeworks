import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";
import hw from './HW1.module.css';

const messageData = {
  avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
  name: "Mariya",
  message: "Who killed Kennedy?",
  time: "22:00",
};


const alternativeMessageData = {
  clipPaperIcon: 'https://www.iconfinder.com/data/icons/sympletts-free-sampler/128/paperclip-512.png',
  placeholderText: 'Type here...',
  sendBtnIcon: 'https://cdn.onlinewebfonts.com/svg/img_516624.png',
}

function HW1() {
  return (
    <div className={hw.wrapper}>
      <p className={hw.title}>Homeworks 1</p>

      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />


      <AlternativeMessage
        clipPaperIcon={alternativeMessageData.clipPaperIcon}
        placeholderText={alternativeMessageData.placeholderText}
        sendBtnIcon={alternativeMessageData.sendBtnIcon}
      />
      <hr/>
    </div>
  );
}

export default HW1;