import { UsersPropsType } from "./UsersContainer";
import c from "./Users.module.css";

export const Users = (props: UsersPropsType) => {

    let mappedUsers = props.usersPage.users.map(u => <div key={u.id} className={c.item}>
            <span>
                <div><img alt='description' src={u.url} /></div>
                <div>
                    {
                        u.followed
                            ? <button onClick={()=>{props.onUnFollowUser(u.id)}}>UnFollow</button>
                            : <button onClick={()=>{props.onFollowUser(u.id)}}>Follow</button>
                    }
                </div>
            </span>
        <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
            </span>
    </div>);

    return <div className={c.users}>{mappedUsers}</div>;
}