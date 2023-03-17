import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/UI/button/Button'
import Spinner from '../../components/UI/Loading/Spinner'
import { APIEndpoints, Paths } from '../../constants/PathURL'
import { ButtonTypes, Icons } from '../../constants/UiConstant'
import useFetch from '../../hooks/useFetch'
import useRedirect from '../../hooks/useRedirect'
import "./People.css"
import Error from "../../components/UI/Error/Error"


function People() {
    const navigate = useNavigate();
    useRedirect();
    const [pagination, setPagination] = useState({ offset: 1, pageSize: 12 })
    const auth = useSelector(state => state.authentication)
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState(false)
    const [data, setData ] = useState([]);
    let elements;

    useEffect(() => {
        fetch(APIEndpoints.PEOPLE(pagination.offset, pagination.pageSize),{
            method: "GET",
            headers: { "authorization": auth.token }
        }).then(res => {
            if(res.ok){
                return res.json();
            }
        }).then(items => {
            console.log("prev data ",data)
            console.log("new data ",items)
            setData([...data, ...items])
        }).catch(err => {
            console.log(err)
            setError(true)
        }).finally(()=>{
            setLoading(false)
        })

    }, [pagination])

  //  console.log(data)
    const goToProfilePage = (id) => {
        navigate(Paths.PROFILE + "/" + id)
    }

    const fetchNewPeople = (e) => {
        //  console.log(e)
        const { scrollHeight, scrollTop, clientHeight } = e.target;
        if ((scrollTop + clientHeight) > scrollHeight) {
            console.log("time to fetch data")
            setPagination({...pagination, offset:pagination.offset+1});
        }

        //   console.log(scrollHeight, scrollTop, clientHeight)
    }

    const addFriendRequest = (userName) => {
        fetch(APIEndpoints.ADD_FRIEND_REQUEST, {
            method: "POST",
            headers: {
                "authorization": auth.token,
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                'requestSenderUserName': auth.userName,
                'requestReceiverUserName': userName
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    console.log(pagination)
    if (loading) {
        elements = <Spinner />
    } else if (data) {
        elements = (
            <div className='people_card_container display_flex justify_content_center position_relative'
                onScroll={(e) => fetchNewPeople(e)}>
                {data.map(item => {
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
                                <img src={APIEndpoints.HOSTNAME + item.profilePictureUrl} className='profile_avatar' alt={item?.name} />
                            </div>
                            <div className='profile_info position_relative'>
                                <h5 className='title' onClick={() => goToProfilePage(item.userName)}>{item.name + " " + item.lastName}</h5>
                                <div className='connections_posts display_flex justify_content_center'>
                                    <div className='container display_flex flex_direction_column'>
                                        <span><strong>{item.friends}</strong></span>
                                        <span>Friends</span>
                                    </div>
                                    <div className='container display_flex flex_direction_column'>
                                        <span><strong>1.2k</strong></span>
                                        <span>Posts</span>
                                    </div>
                                </div>
                            </div>
                            {/*  this button should be in selection case */}
                            <div className='connection_buttons'>
                                <Button name="connect" icon={Icons.plus} type={ButtonTypes.general} click={() => addFriendRequest(item.userName)} />
                            </div>
                        </div>
                    )
                })}
            </div>)
    } else if (error) {
        elements = <Error />
    }
    console.log(data)
    return (
        <div className='people' >
            <div className='header display_flex align_items_center justify_content_space_between'>
                <h2 className='title'>People you may know</h2>
                <div className='search_bar position_relative'>
                    <i className={Icons.search}></i>
                    <form>
                        <input type="text" className='search_box input' placeholder='Search people' />
                    </form>
                </div>
            </div>
            {elements}
        </div>
    )
}

export default People
