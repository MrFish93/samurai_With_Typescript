import {v1} from "uuid";
import {UsersType, UserType} from "../../redux/users-reducer";
import c from "./Users.module.css";

type UserPropsType = {
    usersPage: UsersType
    onFollowUser: (userId: number) => void
    onUnFollowUser: (userId: number) => void
    onPageChanged: (page: number) => void
}

export function User(props: UserPropsType) {

    let pagesCount = Math.ceil(props.usersPage.totalCount / props.usersPage.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let mappedPages = pages.map(p => <span key={v1()}
            className={props.usersPage.currentPage === p ? c.selected : ''}
            onClick={(e) => {props.onPageChanged(p)}}>
            {p+'-'}
        </span>)

    return <div className={c.users}>
        <div>{mappedPages}</div>
        {
            props.usersPage.users.map((u: UserType) => <div key={v1()} className={c.item}>
            <span>
                <div>
                    <img
                        src={'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true'}/>
                </div>
                <div>
                    {
                        u.followed
                            ? <button onClick={() => {props.onUnFollowUser(u.id)}}>UnFollow</button>
                            : <button onClick={() => {props.onFollowUser(u.id)}}>Follow</button>
                    }
                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                </span>
            </span>
            </div>)
        }
    </div>
}