import { MessageType } from "../../../redux/dialogs-reducer";
import c from "../Dialogs.module.css";

export type MessageDataType = MessageType


export function Message(props: MessageDataType) {
    return (
        <div className={c.message}>{props.message}</div>
    )
}