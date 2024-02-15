import React from 'react';
import { Link } from "react-router-dom";

export default function Page404({ imgPath }) {
    return (
        <div className='container'>
            <div className='main-info'>
                
                <div className='main-column'>
                    <small>Кажется, вы сбились с курса. Но не переживайте, <br></br>мы готовы помочь вам!</small>
                    <img className='main-img' src='./images/404upd.png' alt=''></img>
                    <button className='line-btn'><Link to="/">Вернуться на главную</Link> </button>
                </div>
            </div>
        </div>
    )
}