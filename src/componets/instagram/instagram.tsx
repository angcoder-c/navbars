import './../../styles/instagram/nav.css';
import exploreIcon from './../../assets/icons/explore-instagram.svg'
import favoriteIcon from './../../assets/icons/favorite-instagram.svg'
import accountIcon from './../../assets/icons/account-circle-instagram.svg'
import logoutIcon from './../../assets/icons/logout-instagram.svg'
import InstagramNavButton from './buttons';
import InstagramSearch from './search';
import InstagramLogo from './logo';


const Instagram = () => {
    return (
        <div className='instagram-nav'>
            <ul>
                <div className='instagram-left'>
                    <InstagramLogo/>
                </div>
            
                <div className='instagram-center'>
                    <InstagramSearch/>
                </div>
                <div className='instagram-right'>
                    <InstagramNavButton
                    icon={exploreIcon}/>
                    <InstagramNavButton
                    icon={favoriteIcon}/>
                    <InstagramNavButton
                    icon={accountIcon}/>
                    <InstagramNavButton
                    icon={logoutIcon}/>
                </div>
            </ul>
        </div>
    )
}

export default Instagram;