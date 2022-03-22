import c from './Profile.module.css';
import {MyPosts} from "./Posts/MyPosts";
import {PostsContainer} from './Posts/PostsContainer';

export function Profile() {
    return (
        <div className={c.content}>
            <ProfileInfo/>
            <PostsContainer/>
        </div>
    )
}

function ProfileInfo() {
    return (
        <div>
            <img
                src='https://сезоны-года.рф/sites/default/files/images/shkolnikam/Kareliya.jpg'/>
            <div>
                ava+description
            </div>
        </div>
    )
}