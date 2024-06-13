import React, {ReactNode} from "react";
import './../../styles/facebook/text_button.css'

interface TextNavButtonsProps {
    children: ReactNode;
}

const TextNavButtons: React.FC<TextNavButtonsProps> = ({ children }) => {
    
    return (
        <li>
            <div className='button-container-text'>
                {children}
            </div>
        </li>
    )
}

export default TextNavButtons;