import { useEffect, useState } from 'react';
import searchIcon from './../../assets/icons/search-icon.svg';

const RedditSearch = () => {
    const [svgContent, setSvgContent] = useState('');
    useEffect(() => {
        fetch(searchIcon)
        .then(request => request.text())
        .then(data => setSvgContent(data))
    }, [])

    return (
        <li>
            <div className="search-container">
                <div className='reddit-search-icon' dangerouslySetInnerHTML={{__html : svgContent}}/>
                <input type="text" placeholder='Search Reddit' className='reddit-search-input'/>
            </div>
        </li>
    )
}

export default RedditSearch;