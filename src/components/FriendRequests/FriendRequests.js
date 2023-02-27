import React, { useState } from 'react'

function FriendRequests() {
    const [state, setstate] = useState([])
    const [friendRequests, setFriendRequest] = useState([]);
    
    return (
        <section className='requests box_style section_splitor'>
            <div className='header_container display_flex_align_center'>
                <h3>Requests</h3>
                <span className='total_budge'>{friendRequests.length}</span>
            </div>
            <div className='contacts_container'>
                <div className='request'>
                    <div className='profile_account request display_flex_align_center'>
                        <img src='\images\ProfileImages\user3.jpg' className='profile_avatar_small' />
                        <h5 className='name_request'>Maria Johns <span> wants to add you to friends</span></h5>
                    </div>
                    <div className='accept_reject_container display_flex_align_center'>
                        <Button name={"Accept"} type={ButtonTypes.general} icon={Icons.tick} />
                        <Button name={"Decline"} type={ButtonTypes.gray} icon={Icons.x} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FriendRequests
