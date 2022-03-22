import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import React, { ChangeEvent } from 'react';
import { DialogsPropsType } from './DialogsContainer';

export function Dialogs(props: DialogsPropsType) {

    const onSendMessage = () => props.onSendMessage();
    const onChangeTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => props.onChangeTextMessage(e.currentTarget.value);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {props.dialogsPage.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id}/> )}
            </div>
            <div className={c.messages}>
                <div>{props.dialogsPage.messages.map( m => <Message key={m.id} message={m.message} id={m.id}/> )}</div>
                <div>
                    <div><textarea value={props.dialogsPage.newMessageBody} onChange={ onChangeTextMessage }/></div>
                    <div><button onClick={ onSendMessage }>send</button></div>
                </div>
            </div>
        </div>
    )
}

