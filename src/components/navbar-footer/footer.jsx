import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = (props) => {
    return (
        <div className={props.foot}>
            <div className="icons">
                <YouTubeIcon />
                <FacebookIcon />
                <LinkedInIcon />
                <InstagramIcon />
                <TwitterIcon />
            </div>
            <div className='terms-policy'>
                <div>Terms of services</div>
                <div>Privacy services</div>
            </div>
            <div className='copyright'>Copyright 2021 @ Peddle Technologies. All Rights Reserved.</div>
        </div>
    )
}

export default Footer;