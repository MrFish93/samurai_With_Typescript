import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {addPostAC, ProfilePageType, updateNewPostTextAC } from '../../../redux/profile-reducer';
import { AppRootStoreType } from '../../../redux/redux-store';
import { MyPosts } from './MyPosts';

type MapStatePropsType = {
    profilePage: ProfilePageType
}
type MapDispatchPropsType = {
    addPostAC: () => void
    updateNewPostTextAC: (text: string) => void
}
export type PostsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStoreType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType  => {
    return {
        addPostAC: () => {
            dispatch(addPostAC());
        },
        updateNewPostTextAC: (newText: string) => {
            dispatch(updateNewPostTextAC(newText));
        }
    }
}

export const PostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);

