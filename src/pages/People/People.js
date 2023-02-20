import React from 'react'
import Button from '../../components/UI/button/Button'
import { Icons } from '../../constants/UiConstant'
import "./People.css"

function People() {
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
            <div className='people_card_container'>
                
            </div>
        </div>
    )
}

export default People
