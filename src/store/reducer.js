import actions from "./Actions";
import { BytesToFile } from "../Utils/BlobToFile";

const initailState = {
    authentication: {
        isAuthenticated: false,
        accessToken:"",
        userName: "",
        token: "",
        profileImage:"",
        email: "",
        connections:0
    }
};

const reducer = (state = initailState, action) => {
    switch(action.type){
        case actions.ADD_USER_INFO:
            const authentication = {
                isAuthenticated: true,
                accessToken: action.payload.accessToken,
                userName:action.payload.accountDTO.name +" " + action.payload.accountDTO.lastName,
                email:action.payload.accountDTO.email,
                token: action.payload.accessToken,
                connections: action.payload.accountDTO.connections,
                profileImage: BytesToFile(action.payload.accountDTO.profileImage, "image/png")
            }
            return {
                ...state,
                authentication : authentication
            }
        default:
            return state
    }
}

export default reducer