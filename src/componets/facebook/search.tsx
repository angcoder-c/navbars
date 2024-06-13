import searchIcon from './../../assets/icons/search-icon.svg';
import { useEffect, useState } from 'react';
import './../../styles/facebook/search.css';

const SearchNavFB = () => {
    const [svgContent, setSvgContent] = useState('');
    useEffect(() => {
        fetch(searchIcon)
          .then(response => response.text())
          .then(data => setSvgContent(data));
    }, []);

    return (
       <li>
        <div className={'search-container'}>
            <div className={'search-icon'} dangerouslySetInnerHTML={{ __html: svgContent }}/>
            <input type="text" name="search" placeholder="Buscar" className="search-input" />
        </div>
       </li>
    )
}

export default SearchNavFB;