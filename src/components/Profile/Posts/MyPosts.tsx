import c from './MyPosts.module.css'
import {Post, PostPropsType} from "./Post/Post";
import React from "react";
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import { AllActionType } from '../../../redux/state';

type MyPostsPropsType = {
    posts: Array<PostPropsType>
    dispatch: (action: AllActionType) => void
}

export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {props.dispatch(addPostAC())}
    const onPostChange = () => {props.dispatch(updateNewPostTextAC(newPostElement.current ? newPostElement.current.value : ''))}

    return (
        <div className={c.posts}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement} onChange={onPostChange}/></div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            <div>{postsElements}</div>
        </div>
    )
}

