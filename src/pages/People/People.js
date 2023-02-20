import React from 'react'
import Button from '../../components/UI/button/Button'
import ProfilePicture from '../../components/UI/ProfilePicture/ProfilePicture'
import { ButtonTypes, Icons } from '../../constants/UiConstant'
import "./People.css"

const randColor = {
    background: `linear-gradient(45deg, hsl(${(Math.random() * 255).toFixed(0)}, 60%, 50%), hsl(${(Math.random() * 255).toFixed(0)}, 30%, 50%))`
}
function People() {
    const p = { name: "Ali herawi", image: '/images/ProfileImages/user3.jpg' };
    const people = [{ p }, { p }, { p }, { p }];
    return (
        <div className='people'>
            <div className='header display_flex align_items_center justify_content_space_between'>
                <h2 className='title'>People you may know</h2>
                <div className='search_bar'>
                    <i className={Icons.search}></i>
                    <form>
                        <input type="text" className='search_box input' placeholder='Search people' />
                    </form>
                </div>
            </div>
            <div className='people_card_container display_flex position_relative'>
                {people.map(item => {
                    return (
                        <div className='people_card box_shadow'>
                            <div className='card_header' style={{ "--background": randColor.background }}>
                            </div>
                            <div className='profile_info position_relative'>
                                {<ProfilePicture userInfo={{ name: "Ali herawi", image: '/images/ProfileImages/user3.jpg' }} />}
                                <div className='connections_posts display_flex justify_content_center'>
                                    <div className='container display_flex flex_direction_column'>
                                        <span><strong>1.4k</strong></span>
                                        <span>Friends</span>
                                    </div>
                                    <div className='container display_flex flex_direction_column'>
                                        <span><strong>1.2k</strong></span>
                                        <span>Posts</span>
                                    </div>
                                </div>
                            </div>
                            <div className='connection_buttons'>
                                <Button name="connect" icon={Icons.plus} type={ButtonTypes.general} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default People
