const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type PostType = {
    message: string
    likesCount: number
    id: number
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hey, little Kitty', likesCount: 1},
        {id: 2, message: 'Hello, big Dog', likesCount: 23},
    ],
    newPostText: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileAT): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 0}], newPostText: ''}
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        default: return state;
    }
}

export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText: newText})

type AddPostType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type ProfileAT = AddPostType | UpdateNewPostTextType