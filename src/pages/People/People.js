import React, { useEffect, useState, useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/UI/Loading/Spinner'
import { APIEndpoints } from '../../constants/PathURL'
import { Icons } from '../../constants/UiConstant'
import useRedirect from '../../hooks/useRedirect'
import "./People.css"
import Error from "../../components/UI/Error/Error"
import PeopleCard from '../../components/PeopleCard/PeopleCard'
import useFetch from '../../hooks/useFetch'


function People() {
    useRedirect();
    const [pagination, setPagination] = useState({ offset: 1, pageSize: 12 })
    const [sortedPeople, setSortedPeople] = useState([]);
    const auth = useSelector(state => state.authentication)
    const { data, error, loading, setData, hasMore } = useFetch(APIEndpoints.PEOPLE(pagination.offset, pagination.pageSize), {
        method: "GET",
        headers: { "authorization": auth.token }
    });
    const [search, setSearch] = useState("");
    const lastNode = useRef();
    let elements;

    useEffect(() => {
        let holder = []
        for (let d in data) {
            let item = data[d];
            holder.push(item);
        }
        setSortedPeople(holder)

    }, [data, pagination])


    const lastNodeReference = node => {
        if (loading) return;
        if (lastNode.current) lastNode.current.disconnect();
        lastNode.current = new IntersectionObserver(enteries => {
            if (enteries[0].isIntersecting) {
                if (hasMore) {
                    setPagination({ offset: pagination.offset + 1, pageSize: pagination.pageSize })
                }
            }
        })
        if (node) lastNode.current.observe(node);
    }



    if (data) {
        elements = (
            <div className='people_card_container display_flex justify_content_center position_relative'>
                {sortedPeople.map((item, index) => {
                    const randColor = {
                        background: `linear-gradient(45deg, hsl(${(Math.random() * 255).toFixed(0)}, 60%, 50%), hsl(${(Math.random() * 255).toFixed(0)}, 30%, 50%))`
                    }
                    if (sortedPeople.length === index + 1) {
                        return <PeopleCard
                            userName={item.userName}
                            name={item.name}
                            lastName={item.lastName}
                            profilePictureUrl={item.profilePictureUrl}
                            friends={item.friends}
                            posts={item.posts}
                            key={item.userName}
                            randColor={randColor}
                            customRef={lastNodeReference}
                        />
                    }
                    return (
                        <PeopleCard
                            userName={item.userName}
                            name={item.name}
                            lastName={item.lastName}
                            profilePictureUrl={item.profilePictureUrl}
                            friends={item.friends}
                            posts={item.posts}
                            key={item.userName}
                            randColor={randColor}
                        />
                    )
                })}

            </div>)
    } else if (error) {
        elements = <Error />
    }
    return (
        <div className='people' >
            <div className='header display_flex align_items_center justify_content_space_between'>
                <h2 className='title'>People you may know</h2>
                <div className='search_bar position_relative'>
                    <i className={Icons.search}></i>
                    <form>
                        <input
                            type="text"
                            className='search_box input'
                            placeholder='Search people'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)} />
                    </form>
                </div>
            </div>

            <section style={{ position: "relative" }}>
                {elements}
                {hasMore && <Spinner />}
                {!hasMore && <h5>end of the the items</h5>}
            </section>

        </div>
    )
}

export default People
