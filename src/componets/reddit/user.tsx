import userImg from './../../assets/images/user-pic-reddit.png';

const RedditUserPic = () => {

    return (
        <li>
            <div className='reddit-user-pic'>
                <img src={userImg}/>
            </div>
        </li>
    )
}

export default RedditUserPic;