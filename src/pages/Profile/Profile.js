import React,{useState, useEffect, useRef} from 'react'
import "./Profile.css"
import { useSelector } from 'react-redux'
import useRedirect from "../../hooks/useRedirect"
import About from "./About/About"
import Timeline from "./Timeline/Timeline"
import Friends from "./Friends/Friends"
import Photos from "./photos/Photos"
import ProfilePicture from '../../components/UI/ProfilePicture/ProfilePicture'
import { APIEndpoints } from '../../constants/PathURL'
import { useParams } from 'react-router-dom'
import { BytesToFile } from '../../Utils/BlobToFile'
import useMoveToTopOfPage from '../../hooks/useMoveToTopOfPage'
const randColor = {
    background: `linear-gradient(45deg, hsl(${(Math.random()*255).toFixed(0)}, 60%, 50%), hsl(${(Math.random()*255).toFixed(0)}, 30%, 50%))`
}
const components = {
    About:{name:'About', component:About},
    Timeline:{name:'Timeline', component:Timeline},
    Friends:{name:'Friends', component:Friends},
    Photos:{name:'Photos', component:Photos} 
}

function Profile() {
    const [state, setstate] = useState(components.Timeline);
    useRedirect()
    const store = useSelector(state => state.authentication)
    const {userName} = useParams();
    const [userInfo, setUserInfor] = useState({});
    
    // scroll the wrapper container to 0,0 point while rendering
    useMoveToTopOfPage(userName);
    const element = useRef();
    
    useEffect(() => {
        // get the user info from api
        fetch(APIEndpoints.ONE_PERSON+userName,{
            method:"GET",
            headers:{"Authorization":store.token}
        }).then(res => res.json()
        ).then(data => {
            setUserInfor(data)
        })
    }, [userName])
    
    return (
        <div className='profile' ref={element}>
            {/* the navbar of the profile page */}
            <div className='profile_header'>
                <div className='header_image' style={{"--background":randColor.background }}>
                    <ProfilePicture userInfo={{name:userInfo?.name+" "+userInfo?.lastName, image:BytesToFile(userInfo?.profileImage)}} size={"large"} />
                </div>
                <ul className='profile_menu display_flex justify_content_center'>
                    <li className={state.name == components.Timeline.name? 'active':''} onClick={() => setstate(components.Timeline)}>Timeline</li>
                    <li className={state.name == components.About.name? 'active':''} onClick={() => setstate(components.About)}>About</li>
                    <li className={state.name == components.Friends.name? 'active':''} onClick={() => setstate(components.Friends)}>Friends</li>
                    <li className={state.name == components.Photos.name? 'active':''} onClick={() => setstate(components.Photos)}>Photos</li>
                </ul>
            </div>


            {/* the body of menu */}
            <div className='menu_body display_flex justify_content_center alig_item_center'>
                {<state.component />}
            </div>
        </div>
    )
}

export default Profile
