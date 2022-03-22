import { PostType } from "../../../../redux/profile-reducer";
import c from "./Post.module.css";

export type PostPropsType = PostType

export function Post(props: PostPropsType) {
    return (
        <div className={c.item}>
            <img src='https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg'/>
            {props.message}
            <button>{'like' + props.likesCount}</button>
        </div>
    )
}