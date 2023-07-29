import React from 'react';
import './Cart.css';
import img from '../../images/pic.jpg';

const Cart = () => {
    return (

        <div className='cart'>
            <div className='cart-info'>
                <div><img src={img} alt="" /></div>

                <div className='cart-text'>
                    <p>Shafiul Islam </p>
                    <small>Dinajpur,Bangladesh</small>
                </div>
            </div>

            <div className='weight-height-age'>
                <div className='top-bottom'>
                    <p>62</p>
                    <span>Weight</span>
                </div>
                <div className='top-bottom'>
                    <p>5.5</p>
                    <span>Height</span>
                </div>
                <div className='top-bottom'>
                    <p>25</p>
                    <span>Age</span>
                </div>
            </div>

        </div>
    );
};

export default Cart;