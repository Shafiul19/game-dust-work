import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Games.css';
import Game from '../Game/Game';
import img from '../../images/pic.jpg';

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
    return (
        <div className='games'>
            <div className="game-container">
                <FontAwesomeIcon icon={faDumbbell} className='icon'></FontAwesomeIcon>

                <span className='game-activities'>Game Dust Activities</span>

                <h4>Select Today's Game</h4>

                <div className='img-container'>


                    {games.map(game => <Game key={game.id} game={game}></Game>)}

                </div>

            </div>

            <div className="cart-container">

                <div className='address'>
                    <div><img src={img} alt="" /></div>

                    <div className='address-text'>
                        <p>Shafiul Islam </p>
                        <small>Dinajpur,Bangladesh</small>
                    </div>



                </div>


                <div className='myself'>

                    <div>
                        <p >62 <sub className='kg-unit'>kg</sub></p>
                        <small>Weight</small>
                    </div>
                    <div>
                        <p>5.5</p>
                        <small>Height</small>
                    </div>
                    <div>
                        <p>25 <sub className='year-unit'>yrs</sub></p>
                        <small>Age</small>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Games;