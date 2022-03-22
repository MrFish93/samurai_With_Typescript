import c from './MyPosts.module.css'
import {Post, PostPropsType} from "./Post/Post";
import React, { ChangeEvent } from "react";
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import { PostsPropsType } from './PostsContainer';

export function MyPosts(props: PostsPropsType) {

    let postsElements = props.profilePage.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id}/>)

    const addPost = () => {props.addPostAC()}
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {props.updateNewPostTextAC(e.currentTarget.value)}

    return (
        <div className={c.posts}>
            <h3>My posts</h3>
            <div>
                <div><textarea value={props.profilePage.newPostText} onChange={onPostChange}/></div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            <div>{postsElements}</div>
        </div>
    )
}

