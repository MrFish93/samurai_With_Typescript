import {
    followAC,
    unFollowAC,
    setUserAC,
    UsersType,
    setCurrentPageAC,
    setTotalUsersCountAC
} from './../../redux/users-reducer';
import {connect} from 'react-redux';
import {AppRootStoreType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import axios from "axios";
import React from "react";
import {User} from "./User";

type MapStatePropsType = {
    usersPage: UsersType
}
type MapDispatchPropsType = {
    onFollowUser: (userId: number) => void
    onUnFollowUser: (userId: number) => void
    setUser: (users: UsersType) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStoreType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onFollowUser: (userId: number) => {
            dispatch(followAC(userId));
        },
        onUnFollowUser: (userId: number) => {
            dispatch(unFollowAC(userId));
        },
        setUser: (users: UsersType) => {
            dispatch(setUserAC(users));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount));
        }
    }
}

class UsersContainer extends React.Component<any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    render() {
        return (
            <User
                usersPage={this.props.usersPage}
                onFollowUser={this.props.onFollowUser}
                onUnFollowUser={this.props.onUnFollowUser}
                onPageChanged={this.onPageChanged}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);