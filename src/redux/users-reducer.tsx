export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET-USERS';
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
}
export type UserType = {
    id: number
    uniqueUrlName: null
    followed: boolean
    name: string
    status: null
    photos: {small: null, large: null}
}

let initialState: UsersType = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
}

export const usersReducer = (state = initialState, action: UsersAT) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map( u => u.id === action.userId ? {...u, followed: true } : u )}
        case UNFOLLOW:
            return {...state, users: state.users.map( u => u.id === action.userId ? {...u, followed: false } : u )}
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalCount: action.totalCount}
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId});
export const setUserAC = (users: UsersType) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount});

type FollowAT = {
    type: 'FOLLOW'
    userId: number
}
type UnFollowAT = {
    type: 'UNFOLLOW'
    userId: number
}
type SetUsersAT = {
    type: 'SET-USERS'
    users: UsersType
}
type SetCurrentPageAT = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}
type SetTotalUsersCountAT = {
    type: 'SET-TOTAL-USERS-COUNT'
    totalCount: number
}

export type UsersAT = FollowAT | UnFollowAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCountAT