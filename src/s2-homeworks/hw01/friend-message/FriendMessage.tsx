import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

// создать тип вместо any и отобразить приходящие данные
export type MessagePropsType = {
    message: MessageType
}
const FriendMessage = (props: MessagePropsType) => {
    const {message} = props
    return (
        <div
            id={'hw1-friend-message-' + message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + message.id}
                    // создаёт студент
                    src={message.user.avatar}
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        {message.user.name}
                        {/**/}
                    </div>
                    <div
                        id={'hw1-friend-text-' + message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {message.message.text}
                        {/**/}
                    </div>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                {message.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
