import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';

const HomeButton = () => {
    return (
        <Link to='/coming-soon'>
            <div className='home-button'>
                <ArrowRightAltIcon />
            </div>
        </Link>
    )
}

export default HomeButton;