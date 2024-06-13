import React, { useEffect, useState } from 'react';

interface RedditNavButtonTextProps {
    icon : string;
    text : string;
}

const RedditNavButtonText : React.FC<RedditNavButtonTextProps>= ({ icon, text }) => {
    const [svgContent, setSvgContent] = useState('');
    useEffect(() => {
        fetch(icon)
        .then(request => request.text())
        .then(data => setSvgContent(data))
    }, [])

    return (
        <li>
            <div className='reddit-nav-buttons-text'>
                <div dangerouslySetInnerHTML={{__html : svgContent}}/>
                <span>{text}</span>
            </div>
        </li>
    )
}

export default RedditNavButtonText;