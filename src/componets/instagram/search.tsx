import { useState, useEffect } from "react";
import searchIcon from './../../assets/icons/search-icon.svg';

const InstagramSearch = () => {
    const [svgContent, setSvgContent] = useState('');

    useEffect(() => {
        fetch(searchIcon)
        .then(response => response.text())
        .then(data => setSvgContent(data))
    }, [])

    return (
        <li>
            <div className="search-container">
                <input type="text" name="search" className='instagram-search-input' placeholder="Search"/>
                <div className='instagram-search-icon' dangerouslySetInnerHTML={{__html : svgContent}}/>
            </div>
        </li>
    )
}

export default InstagramSearch;