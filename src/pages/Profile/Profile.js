import React,{useState} from 'react'
import "./Profile.css"
import { useSelector } from 'react-redux'
import useRedirect from "../../hooks/useRedirect"
import About from "./About/About"
import Timeline from "./Timeline/Timeline"
import Friends from "./Friends/Friends"
import Photos from "./photos/Photos"

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
    console.log(state)
    return (
        <div className='profile'>
            {/* the navbar of the profile page */}
            <div className='profile_header'>
                <div className='header_image' style={{ "--headerbackground": `url(${store.profileImage})` }}>
                    <div className='user_profile_info display_flex align_items_center'>
                        <img src={store.profileImage} className="profile_img_border" />
                        <h2 className='username'>{store.userName}</h2>
                    </div>
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
