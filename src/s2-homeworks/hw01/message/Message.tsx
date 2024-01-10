import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {

    const {message} = props
    return (
        <div id={'hw1-message-' + message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + message.id}
                    // создаёт студент
                    src={message.user.avatar}
                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + message.id} className={s.name}>
                        {/*создаёт студент*/}
                        {message.user.name}
                        {/**/}
                    </div>
                    <div id={'hw1-text-' + message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {message.message.text}
                        {/**/}
                    </div>
                </div>
            </div>
            <div id={'hw1-time-' + message.id} className={s.time}>
                {/*создаёт студент*/}
                {message.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default Message
