import React from 'react';
import './Game.css';

const Game = (props) => {
    const { img, name, time } = props.game;
   
    return (
        <div className='game'>
            {/* <img src={img} alt="" /> */}
            <img src = {img} alt= "img not found"/>
            <div className='text'>
                <h4>{name}</h4>
                <p><small>Time required: {time} </small></p>
                <button onClick={() => props.handleAddToCart(props.game)} className='btn-add'>
                    <p className='btn-text'>Add to list</p>
                </button>
            </div>
        </div>
    );
};

export default Game;