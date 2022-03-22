export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type DialogItemType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Vova'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Vlad'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
    ],
    newMessageBody: '',
}

export const dialogsReducer = (state = initialState, action: DialogsAT): DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.newMessage}
        case SEND_MESSAGE:
            return {...state, messages: [...state.messages, {id: 4, message: state.newMessageBody}], newMessageBody: ''}
        default: return state;
    }
}

type UpdateNewMessageBodyType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    newMessage: string
}
type SendMessageType = {
    type: 'SEND-MESSAGE'
}

export const updateNewMessageBodyAC = (newMessage: string) => ({type: UPDATE_NEW_MESSAGE_BODY, newMessage})
export const sendMessageAC = () => ({type: SEND_MESSAGE});

export type DialogsAT = UpdateNewMessageBodyType | SendMessageType