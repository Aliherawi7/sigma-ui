import React, { useEffect } from 'react'
import "./Home.css"
import Button from '../../components/UI/button/Button'
import { Icons, ButtonTypes } from '../../constants/UiConstant'
import { useSelector } from 'react-redux'
import useRedirect from '../../hooks/useRedirect'
import Post from '../../components/Post/Post'
import ProfilePicture from '../../components/UI/ProfilePicture/ProfilePicture'


function Home() {
  useRedirect();
  const state = useSelector(state => state.authentication);

  return (
    <section className='home fade_in'>
      {/* stories */}
      {/* <h2 className='home_header'>Stories</h2>
      <Stories /> */}

      <h2 className='home_header'>Feed</h2>
      <div className='whats_new box_shadow background_color'>
        <ProfilePicture userInfo={{ image: state?.profileImage }} />
        <input type={"text"} className="input" placeholder="What's new, user?" />
        <Button name={"Post"} icon={Icons.post} type={ButtonTypes.general} />
      </div>

      <Post
        userInfo={{ name: state?.userName, image: state?.profileImage }}
        date={"2023-02-03"}
        images={['/images/login_page.jpg', '/images/signup_page.jpg']}
      />
    </section>
  )
}

export default Home