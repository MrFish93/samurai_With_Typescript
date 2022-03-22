import {updateNewMessageBodyAC, sendMessageAC, DialogsAT, DialogsPageType} from './../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import { AppRootStoreType } from '../../redux/redux-store';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchPropsType = {
    onSendMessage: () => void
    onChangeTextMessage: (text: string) => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStoreType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType  => {
    return {
        onSendMessage: () => {
            dispatch(sendMessageAC());
        },
        onChangeTextMessage: (newMessage: string) => {
            dispatch(updateNewMessageBodyAC(newMessage));
        }
    }
}

export const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);

