import c from './Profile.module.css'
import {MyPosts} from "./Posts/MyPosts";
import {AllActionType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: AllActionType) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={c.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch}/>
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