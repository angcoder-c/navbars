import facebookLogo from './../../assets/logos/facebook-logo.png';
import './../../styles/facebook/logo.css';

const Logo = () => {
    return (
        <li>
            <div className='logo-container'>
                <img src={facebookLogo} alt="fb-logo" className='logo'/>
            </div>
        </li>
    )
}

export default Logo;