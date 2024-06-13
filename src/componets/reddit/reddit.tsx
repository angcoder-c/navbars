import './../../styles/reddit/nav.css'
import adviceIcon from './../../assets/icons/advice-icon.svg'
import chatIcon from './../../assets/icons/chat-icon.svg'
import notificationIcon from './../../assets/icons/notification-reddit-icon.svg'
import createIcon from './../../assets/icons/create-reddit-icon.svg'

import RedditSearch from './search'
import RedditNavButton from './button'
import RedditNavButtonText from './button_text'
import RedditUserPic from './user'
import RedditLogo from './logo'

const Reddit = () => {
    return (
        <div className="reddit-nav">
            <ul>
                <div className='reddit-left'>
                    <RedditLogo/>
                </div>
                <div className='reddit-center'>
                    <RedditSearch/>
                </div>
                <div className='reddit-right'>
                    <RedditNavButton
                    icon={adviceIcon}/>
                    <RedditNavButton
                    icon={chatIcon}/>
                    <RedditNavButtonText
                    icon={createIcon}
                    text='Create'/>
                    <RedditNavButton
                    icon={notificationIcon}/>
                    <RedditUserPic/>
                </div>
            </ul>
        </div>
    )
}

export default Reddit;