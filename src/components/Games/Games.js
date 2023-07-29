import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Games.css';
import Game from '../Game/Game';
import Cart from '../Cart/Cart';


import { faDumbbell } from '@fortawesome/free-solid-svg-icons';


const Games = () => {
    const games = [
        { id: 1, img: 'https://shorturl.at/sBJOU', name: 'Football', time: '90min' },
        { id: 2, img: 'https://shorturl.at/knyCX', name: 'Cricket', time: '180min' },
        { id: 3, img: 'https://shorturl.at/mCD14', name: 'Pubg', time: '200min' },
        { id: 4, img: 'https://shorturl.at/gvLP6', name: 'Free fire', time: '250min' },
        { id: 5, img: 'https://shorturl.at/ijA39', name: 'Daba', time: '100min' },
        { id: 6, img: 'https://shorturl.at/hioUZ', name: 'Hockey', time: '200min' }
    ]

    const [cart, setCart] = useState([]);

    const handleAddToCart = (game) => {
        const newCart = [...cart, game];
        setCart(newCart)

    }

    return (
        <div className='games'>
            <div className="game-container">
                <FontAwesomeIcon icon={faDumbbell} className='icon'></FontAwesomeIcon>

                <span className='game-activities'>Game Dust Activities</span>

                <h4>Select Today's Game</h4>

                <div className='img-container'>


                    {games.map(game => <Game key={game.id} game={game}
                        handleAddToCart={handleAddToCart}></Game>)}

                </div>

            </div>

            <div className="cart-container">

                <Cart cart={cart}></Cart>






            </div>
        </div>
    );
};

export default Games;