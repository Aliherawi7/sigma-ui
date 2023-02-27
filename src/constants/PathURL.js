export const Paths = {
    LOGIN:"/login",
    HOME : '/',
    CHAT : '/chat',
    PEOPLE : '/people',
    PROFILE : '/profile',
    SETTINGS : '/settings',
    LOAD: 'load'
}

export const APIEndpoints = {
    PEOPLE: "http://localhost:9090/api/accounts/all",
    ONE_PERSON:"http://localhost:9090/api/accounts/userName/",
    POST:"http://localhost:9090/api/posts/userName/",
    ADD_FRIEND_REQUEST: 'http://localhost:9090/api/friendRequests',
    ALL_Received_Friend_Reqeuests:"http://localhost:9090/api/friendRequests/allReceived",
    ACCEPT_FRIEND_REQUEST:"http://localhost:9090/api/friendRequests/accept",
    ALL_Friends : (userName) => `http://localhost:9090/api/accounts/${userName}/friends`,
}