import './Navbar.scss'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <ul>
                <li>My Life</li>
                <div>
                    <li> <Link className='navLink1' to='/home'>Home</Link> </li>
                    <li> <Link className='navLink1' to='/blog'>Blog</Link> </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
