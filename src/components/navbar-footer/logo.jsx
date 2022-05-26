import log from '../../media/log.png'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to='/coming-soon'>
            <img className='logo' src={log} alt="Logo" />
        </Link>
    )
}

export default Logo;