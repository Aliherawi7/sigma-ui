import actions from "./Actions";
import { getCookies } from "../Utils/Cookie";
import { APIEndpoints } from "../constants/PathURL";
function getAuthInfoFromCookie() {
    let data = getCookies()
    if (data.size > 0) {
        return {
            isAuthenticated: true,
            userName: data.get("userName"),
            name:data.get("name"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            token: data.get("token"),
            connections: data.get("connections"), 
            profileImage: APIEndpoints.HOSTNAME+data.get("profileImage")
        }
    }

}
const initailState = {
    currentPathLocaion: window.location.pathname,
    authentication: getAuthInfoFromCookie() ? getAuthInfoFromCookie(): {
        isAuthenticated: false,
        accessToken: "",
        userName: "",
        token: "",
        profileImage: "",
        email: "",
        connections: 0
    }
};

const reducer = (state = initailState, action) => {
    switch (action.type) {
        case actions.ADD_CRURRENT_URL:
            return{
                ...state,
                currentPathLocaion:action.payload
            }
        case actions.ADD_USER_INFO:
            const authentication = {
                isAuthenticated: true,
                accessToken: action.payload.accessToken,
                name: action.payload.accountDTO.name,
                lastName: action.payload.accountDTO.lastName,
                email: action.payload.accountDTO.email,
                token: action.payload.accessToken,
                connections: action.payload.accountDTO.connections,
                profileImage: APIEndpoints.HOSTNAME+action.payload.accountDTO.profilePicturePath,
            }
            return {
                ...state,
                authentication: authentication
            }
            case actions.LOGOUT:
                return {
                    ...state,
                    authentication:action.payload
                }
        default:
            return state
    }
}

export default reducer