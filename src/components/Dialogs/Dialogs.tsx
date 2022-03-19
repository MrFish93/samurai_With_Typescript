import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import React from 'react';
import {AllActionType, DialogsPageType } from '../../redux/state';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: AllActionType) => void
}

export function Dialogs(props: DialogsPropsType) {

    let dialogElements = props.dialogsPage.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id}/> )
    let messageElements = props.dialogsPage.messages.map( m => <Message key={m.id} message={m.message} id={m.id}/> )

    const newMessageBody = React.createRef<HTMLTextAreaElement>();
    const onSendMessage = () => props.dispatch(sendMessageAC());
    const onChangeTextMessage = () => props.dispatch(updateNewMessageBodyAC(newMessageBody.current ? newMessageBody.current.value : ''));

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogElements}
            </div>
            <div className={c.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea ref={newMessageBody} onChange={ onChangeTextMessage }/></div>
                    <div><button onClick={ onSendMessage }>send</button></div>
                </div>
            </div>
        </div>
    )
}

