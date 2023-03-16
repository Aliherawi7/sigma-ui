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
    HOSTNAME:"http://localhost:9090/",
    LOGIN:"http://localhost:9090/api/v1/login",
    ACCOUNTS:"http://localhost:9090/api/v1/accounts",
    PEOPLE: "http://localhost:9090/api/v1/accounts/all",
    ONE_PERSON:"http://localhost:9090/api/v1/accounts/userName/",
    POST:"http://localhost:9090/api/v1/posts/userName/",
    ADD_FRIEND_REQUEST: 'http://localhost:9090/api/v1/friendRequests',
    ALL_Received_Friend_Reqeuests:"http://localhost:9090/api/v1/friendRequests/allReceived",
    ACCEPT_FRIEND_REQUEST:"http://localhost:9090/api/v1/friendRequests/accept",
    ALL_FRIENDS : (userName) => `http://localhost:9090/api/v1/accounts/${userName}/friends`,
    MESSAGE_OF_SPECIFIC_ACCOUNT: (username) => `http://localhost:9090/api/v1/messages/${username}`
}