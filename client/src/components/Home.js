import React from 'react';
import '../css/App.css';
import {Link} from 'react-router-dom';
import greet from '../utils/greeting'

const promoText = 'Приложение Бармен - самоучитель приготовления различных коктейлей. Вы можете выбирать коктейли по уровню сложности, готовить их по рецепту, отмечать уже сделанные коктейли и наблюдать свой прогресс. '

function Home(props) {
    let greeting = <div className='home-greeting' id='home-greeting'>{greet(props.userName)}</div>;
    let promo = <div className='App-text_item'>{promoText}</div>
    let contentComponent = <div className='wrapper'>
        {greeting}
        {promo}
    </div>
    if (props.userName !== '') {
        contentComponent = <div className='wrapper'>
            {greeting}
            {promo}
            <Link
                to={'/barmen'}
                className='App-rating'
                id='link-to-barmen'
            >
                Мой Рейтинг
            </Link>
        </div>
    }
    return (
        <div className='App-text'>
            {contentComponent}
        </div>
    );
}

export default Home;
