import actions from "./Actions";
import { BytesToFile } from "../Utils/BlobToFile";
import { getCookies } from "../Utils/Cookie";
function getAuthInfoFromCookie() {
    let data = getCookies()
    if (data.size > 0) {
        return {
            isAuthenticated: true,
            userName: data.get("userName"),
            email: data.get("email"),
            token: data.get("token"),
            connections: data.get("connections"), 
            profileImage: BytesToFile(localStorage.getItem("profileImage"), "image/png")
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
                userName: action.payload.accountDTO.name + " " + action.payload.accountDTO.lastName,
                email: action.payload.accountDTO.email,
                token: action.payload.accessToken,
                connections: action.payload.accountDTO.connections,
                profileImage: BytesToFile(action.payload.accountDTO.profileImage, "image/png")
            }
            return {
                ...state,
                authentication: authentication
            }
        default:
            return state
    }
}

export default reducer