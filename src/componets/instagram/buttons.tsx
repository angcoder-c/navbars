import React, { useState, useEffect } from "react";

interface InstagramButtonProps {
    icon : string;
}

const InstagramNavButton : React.FC<InstagramButtonProps> = ({ icon }) => {
    const [svgContent, setSvgContent] = useState('');

    useEffect(() => {
        fetch(icon)
        .then(response => response.text())
        .then(data => setSvgContent(data))
    }, [])

    return (
        <li>
            <div className='instagram-nav-buttons' dangerouslySetInnerHTML={{__html : svgContent}}/>
        </li>
    )
}

export default InstagramNavButton;