import homeIcon from './../../assets/icons/home-facebook.svg';
import groupsIcon from './../../assets/icons/groups-facebook.svg';
import menuIcon from './../../assets/icons/menu-icon-facebook.svg';
import messengerIcon from './../../assets/icons/facebook-messenger-black-icon.svg';
import notificationsIcon from './../../assets/icons/notifications-facebook.svg';

import { useState } from 'react';
import SearchNavFB from './search';
import Logo from './logo';
import Account from './account';
import TabButton from './tabs';
import NavButtons from './buttons';
import TextNavButtons from './text_button';
import './../../styles/facebook/nav.css';

const Facebook = () => {
    const [activeTab, setActiveTab] = useState<string>('home');
    return (
        <div className='facebook-nav'>
            <ul>
                <div className='left'>
                    <Logo/>
                    <SearchNavFB/>
                </div>

                <div className='center'>
                    <TabButton
                        src={homeIcon}
                        active={activeTab === 'home'}
                        onClick={() => setActiveTab('home')}
                    />
                    <TabButton
                        src={groupsIcon}
                        active={activeTab === 'groups'}
                        onClick={() => setActiveTab('groups')}
                    />
                </div>

                <div className='right'>
                    <TextNavButtons>
                        <span>Buscar amigos</span>
                    </TextNavButtons>
                    
                    <NavButtons
                    src={menuIcon}
                    />

                    <NavButtons
                    src={messengerIcon}
                    />
                    <NavButtons
                    src={notificationsIcon}
                    />
                    <Account/>
                </div>
            </ul>
        </div>
    )
}

export default Facebook;