import React from 'react'
import "./Timeline.css"
import Post from '../../../components/Post/Post'
import { useSelector } from 'react-redux'

function Timeline() {
    const state = useSelector(state => state.authentication)
    return (
        <div className='profile_timeline'>
            this the timeline component
            <Post
                userInfo={{ name: state?.userName, image: state?.profileImage }}
                date={"2023-02-03"}
                images = {['/images/login_page.jpg','/images/signup_page.jpg']}
            />
        </div>
    )
}

export default Timeline
