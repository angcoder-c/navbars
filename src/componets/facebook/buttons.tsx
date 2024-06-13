import React from "react";
import { useEffect, useState } from 'react';
import './../../styles/facebook/buttons.css';

interface NavButtonsProps {
    src: string;
}

const NavButtons: React.FC<NavButtonsProps> = ({ src }) => {
    const [svgContent, setSvgContent] = useState('');
    useEffect(() => {
        fetch(src)
          .then(response => response.text())
          .then(data => setSvgContent(data));
    }, []);

    return (
        <li>
            <div 
            className='button-container-img'
            dangerouslySetInnerHTML={{ __html: svgContent }}
            />
        </li>
    )
}

export default NavButtons