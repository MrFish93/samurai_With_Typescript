import {followAC, unFollowAC, setUserAC, UsersType, setCurrentPageAC, setTotalUsersCountAC} from './../../redux/users-reducer';
import {Users} from './Users';
import {connect} from 'react-redux';
import { AppRootStoreType } from '../../redux/redux-store';
import { Dispatch } from 'redux';

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);