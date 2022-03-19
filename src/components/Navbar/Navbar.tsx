import {NavLink} from 'react-router-dom'
import c from './Navbar.module.css'

export function Navbar() {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to='/profile' className = { navData => navData.isActive ? c.active : c.item }>Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink  to='/messages' className = { navData => navData.isActive ? c.active : c.item }>Messages</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/news' className = { navData => navData.isActive ? c.active : c.item }>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/settings' className = { navData => navData.isActive ? c.active : c.item }>Settings</NavLink>
            </div>
        </nav>
    )
}