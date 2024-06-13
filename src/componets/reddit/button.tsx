import React, { useEffect, useState } from 'react';

interface RedditNavButtonProps {
    icon : string;
}

const RedditNavButton : React.FC<RedditNavButtonProps>= ({ icon }) => {
    const [svgContent, setSvgContent] = useState('');
    useEffect(() => {
        fetch(icon)
        .then(request => request.text())
        .then(data => setSvgContent(data))
    }, [])

    return (
        <li>
            <div className='reddit-nav-buttons' dangerouslySetInnerHTML={{__html : svgContent}}/>
        </li>
    )
}

export default RedditNavButton;