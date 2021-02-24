import React from 'react';
import '../css/Header.css';
import {Link} from 'react-router-dom';

function Header(props) {
    let authComponent = <Link
        to={'/authorize'}
        className='App-link'
        id='App-header-link-auth'
    >
        Вход
    </Link>
    if (props.userInfo.isAuthorized) {
        authComponent = <button className='App-button' id='App-header-button' onClick={props.dropState}>Выход</button>
    }
    return (
            <header className='App-header'>
                <Link to={'/'}
                    className='App-header_name'
                      id='App-header-link'
                >
                    Карточка бармена
                </Link>
                {authComponent}
            </header>
    );
}

export default Header;
