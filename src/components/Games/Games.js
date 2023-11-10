import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Games.css';
import Game from '../Game/Game';
import Cart from '../Cart/Cart';


import { faDumbbell } from '@fortawesome/free-solid-svg-icons';


const Games = () => {
    const games = [
        { id: 1, img: 'https://c8.alamy.com/comp/CMKC5H/serbian-striker-lazar-markovic-of-benfica-runs-with-the-ball-during-CMKC5H.jpg', name: 'Football', time: '90min' },
        { id: 2, img: 'https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg', name: 'Cricket', time: '180min' },
        { id: 3, img: 'https://wallpapers.com/images/hd/pubg-pictures-o3eqzdeil2265vdj.jpg', name: 'Pubg', time: '200min' },
        { id: 4, img: 'https://dl.dir.freefiremobile.com/common/web_event/hash/54f31449f5f91cf0cc223cc635cd5952jpg', name: 'Free fire', time: '250min' },
        { id: 5, img: 'https://thedailynewnation.com/library/1514215846_6.jpg', name: 'Daba', time: '100min' },
        { id: 6, img: 'https://cdn.britannica.com/50/219150-050-0032E44D/Marc-Andre-Fleury-Vegas-Golden-Knights-Stanley-Cup-Final-2018.jpg', name: 'Hockey', time: '200min' }
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