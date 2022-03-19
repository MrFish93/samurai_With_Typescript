import {DialogsAT, dialogsReducer, sendMessageAC, updateNewMessageBodyAC } from "./dialogs-reducer";
import {addPostAC, ProfileAT, profileReducer, updateNewPostTextAC } from "./profile-reducer";

export const store:StoreType = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hey, little Kitty', likesCount: 1, id: 1},
                {message: 'Hello, big Dog', likesCount: 23, id: 2},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
    },
    _rerenderEntireTree() {
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._rerenderEntireTree();
    }
}

export type StoreType = {
    _state: StateType
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: AllActionType) => void
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type PostType = {
    message: string
    likesCount: number
    id: number
}
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

export type AllActionType = ProfileAT | DialogsAT