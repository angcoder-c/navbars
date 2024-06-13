import redditLogoImg from './../../assets/logos/reddit-logo.png'

const RedditLogo = () => {

    return (
        <li>
            <div className='reddit-logo'>    
                <img src={redditLogoImg}/>
            </div>
        </li>
    )
}

export default RedditLogo;