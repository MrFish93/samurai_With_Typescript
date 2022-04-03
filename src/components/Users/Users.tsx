import {UsersPropsType} from "./UsersContainer";
import c from "./Users.module.css";
import axios from "axios";
import {v1} from "uuid";
import React from "react";
import { UserType } from "../../redux/users-reducer";

/*export const Users1 = (props: UsersPropsType) => {

    let getUsers = () => {
        if (props.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {props.setUser(response.data.items)})
        }
    }

    console.log(props.usersPage.users)

    return <div className={c.users}>
        <button onClick={getUsers}>getUsers</button>
        {
            props.usersPage.users.map(u => <div key={v1()} className={c.item}>
            <span>
                <div><img
                    src={'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true'}/></div>
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
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'Слава Украине'}</div>
                    <div>{'Героям слава'}</div>
                </span>
            </span>
            </div>)
        }
    </div>;
}*/

export class Users extends React.Component<any, any> {
    componentDidMount () {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}')
            .then(response => {this.props.setUser(response.data.items)})
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    render () {

        let pagesCount = Math.ceil(this.props.usersPage.totalCount/this.props.usersPage.pageSize);
        let pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i)
        }

        return <div className={c.users}>
            <div>
                {
                    pages.map(p => <span
                    key={v1()}
                    className={ this.props.usersPage.currentPage === p ? c.selected : '' }
                    onClick={(e)=>{this.onPageChanged(p)}}
                >
                    {p}
                </span>)
                }
            </div>
            {
                this.props.usersPage.users.map((u: UserType ) => <div key={v1()} className={c.item}>
            <span>
                <div>
                    <img src={'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true'}/>
                </div>
                <div>
                    {
                        u.followed
                            ? <button onClick={() => {this.props.onUnFollowUser(u.id)}}>UnFollow</button>
                            : <button onClick={() => {this.props.onFollowUser(u.id)}}>Follow</button>
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
}