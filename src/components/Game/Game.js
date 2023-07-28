import React from 'react';
import './Game.css';

const Game = (props) => {
    const { img, name, time } = props.game;
    console.log(props)
    return (
        <div className='game'>
            <img src={img} alt="" />
            <div className='text'>
                <h5>{name}</h5>
                <p><small>Time required: {time} </small></p>
                <button className='btn-add'>
                    <p className='btn-text'>Add to list</p>
                </button>
            </div>
        </div>
    );
};

export default Game;