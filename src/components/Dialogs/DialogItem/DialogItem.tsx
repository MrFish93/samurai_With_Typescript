import c from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogItemType} from "../../../redux/state";

export type DialogItemPropsType = DialogItemType

export function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={c.dialog + ' ' + c.active}>
            <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
}