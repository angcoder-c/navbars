import React, { useEffect, useState } from 'react';
import './../../styles/facebook/tab.css';


interface TabButtonProps {
    src : string;
    active : boolean;
    onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ src, active, onClick }) => {
    const [svgContent, setSvgContent] = useState('');
    useEffect(() => {
        fetch(src)
          .then(response => response.text())
          .then(data => setSvgContent(data));
    }, []);
    
    return (
        <li>
            <div 
            className={'tab-button-container' + (active ? ' active' : '')} 
            onClick={onClick}
            dangerouslySetInnerHTML={{ __html: svgContent }}
            />
        </li>
    )
}

export default TabButton;
