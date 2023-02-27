import React, { useEffect } from 'react'
import "./Timeline.css"
import Post from '../../../components/Post/Post'
import { useSelector } from 'react-redux'
import { APIEndpoints } from '../../../constants/PathURL'


function Timeline() {
    const state = useSelector(state => state.authentication)
    useEffect(() => {
        fetch(APIEndpoints.POST)
    }, [])
    return (
        <div className='profile_timeline'>
            All Post up to now
            <Post
                userInfo={{ name: state?.userName, image: state?.profileImage }}
                date={"2023-02-03"}
                images = {['/images/login_page.jpg','/images/signup_page.jpg']}
            />
        </div>
    )
}

export default Timeline
