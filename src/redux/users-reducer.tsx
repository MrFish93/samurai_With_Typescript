export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET-USERS';

export type UsersType = {
    users: Array<UserType>
}
type UserType = {
    id: number
    url: string
    followed: boolean
    name: string
    status: string
    location: LocationType
}
type LocationType = {
    city: string
    country: string
}

let initialState: UsersType = {
    users: [
        {id: 1, url: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true',
            followed: true, name: 'Dima P.', status: 'Im boss', location: {city: 'Tbilisi', country: 'Georgia'}},
        {id: 2, url: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true',
            followed: true, name: 'Sasha R.', status: 'im princess', location: {city: 'Voronezh', country: 'Russia'}},
        {id: 3, url: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true',
            followed: false, name: 'Vova K.', status: 'Im loser', location: {city: 'Limasol', country: 'Kipr'}},
        {id: 4, url: 'https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true',
            followed: true, name: 'Vlad O.', status: 'You\'re dont understand', location: {city: 'Berlin', country: 'Germany'}},
    ]
}

export const usersReducer = (state = initialState, action: UsersAT) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map( u => u.id === action.userId ? {...u, followed: true } : u )}
        case UNFOLLOW:
            return {...state, users: state.users.map( u => u.id === action.userId ? {...u, followed: false } : u )}
        case SET_USERS:
            return {...state, users: [...state.users, action.users]}

        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId});
export const setUserAC = (users: UsersType) => ({type: SET_USERS, users});

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

export type UsersAT = FollowAT | UnFollowAT | SetUsersAT