import React from 'react'
import { Icons } from '../../constants/UiConstant'
import Button from '../UI/button/Button'
import "./HeaderNavbar.css"
import { useDispatch, useSelector } from 'react-redux'
import { getCookies, removeAllCookies } from '../../Utils/Cookie'
import actions from '../../store/Actions'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../../constants/PathURL'


function HeaderNavbar() {
    const state = useSelector(state => state.authentication)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const logout = ()=> {
        navigate(Paths.LOGIN)
        removeAllCookies();
        dispatch({
            type:actions.LOGOUT,
            payload:{}
        })
        console.log(getCookies())

    }
    return (
        <nav className='header_navbar display_flex align_items_center'>
            <section className='brand_name display_flex'>
                <div className='brand_name display_flex align_items_center'>
                    <img src='\images\sigma_v2.1_logo.png' alt='sigma_app' className='brand_logo' />
                </div>

            </section>

            <section className='profile_info display_flex_align_center'>
                <div className='search_bar'>
                    <i className={Icons.search}></i>
                    <form>
                        <input type="text" className='search_box input' placeholder='search' />
                    </form>
                </div>
                <div className='notifications'>
                    <Button icon={Icons.notification} />
                    <Button icon={"bi bi-box-arrow-right"} click={logout} />
                </div>
            </section>
        </nav>
    )
}

export default HeaderNavbar
