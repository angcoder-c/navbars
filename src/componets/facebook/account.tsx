import accountPic from './../../assets/images/user-pic-facebook.png';
import './../../styles/facebook/picture.css';

const Account = () => {
    return (
        <li>
            <img src={accountPic} alt="account" className='picture'/>
        </li>
    )
}

export default Account;