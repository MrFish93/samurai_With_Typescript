import c from "../Dialogs.module.css";
import {MessageType} from "../../../redux/state";

export type MessageDataType = MessageType


export function Message(props: MessageDataType) {
    return (
        <div className={c.message}>{props.message}</div>
    )
}