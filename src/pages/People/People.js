import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/UI/button/Button'
import { APIEndpoints, Paths } from '../../constants/PathURL'
import { ButtonTypes, Icons } from '../../constants/UiConstant'
import useRedirect from '../../hooks/useRedirect'
import actions from '../../store/Actions'
import { BytesToFile } from '../../Utils/BlobToFile'
import "./People.css"

const randColor = {
    background: `linear-gradient(45deg, hsl(${(Math.random() * 255).toFixed(0)}, 60%, 50%), hsl(${(Math.random() * 255).toFixed(0)}, 30%, 50%))`
}
function People() {
    const navigate = useNavigate();
    useRedirect();
    const auth = useSelector(state => state.authentication)
    const [state, setstate] = useState([])
    useEffect(() => {
        
        fetch(APIEndpoints.PEOPLE, {
            method: "GET",
            headers: { "authorization": auth.token }
        })
            .then(res => res.json())
            .then(data => {
                setstate(data)
                console.log(data)
            })
        
    }, [])

    const goToProfilePage = (id) => {
        navigate(Paths.PROFILE + "/" + id)
    }

    return (
        <div className='people'>
            <div className='header display_flex align_items_center justify_content_space_between'>
                <h2 className='title'>People you may know</h2>
                <div className='search_bar position_relative'>
                    <i className={Icons.search}></i>
                    <form>
                        <input type="text" className='search_box input' placeholder='Search people' />
                    </form>
                </div>
            </div>
            <div className='people_card_container display_flex justify_content_center position_relative'>
                {state.map(item => {
                    const randColor = {
                        background: `linear-gradient(45deg, hsl(${(Math.random() * 255).toFixed(0)}, 60%, 50%), hsl(${(Math.random() * 255).toFixed(0)}, 30%, 50%))`
                    }
                    return (
                        <div className='people_card box_shadow' key={item.userName}>
                            <div className='card_header' style={{ "--background": randColor.background }}>
                            </div>
                            <div
                                onClick={() => goToProfilePage(item.userName)}
                                className='profile_img_container display_flex align_items_center justify_content_center'>
                                <img src={BytesToFile(item?.profileImage)} className='profile_avatar' alt={item?.name} />
                            </div>
                            <div className='profile_info position_relative'>
                                <h5 className='title' onClick={() => goToProfilePage(item.userName)}>{item.name + " " + item.lastName}</h5>
                                <div className='connections_posts display_flex justify_content_center'>
                                    <div className='container display_flex flex_direction_column'>
                                        <span><strong>{item.connections}</strong></span>
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
