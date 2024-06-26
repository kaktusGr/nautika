import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function JourneyBtn({ title, text, path }) {
    const [hoverClass, setHoverClass] = useState(false);
    const disabledLinkStyle = ((path !== "certificates") ?
        <Link to={`/${path}`} style={{ opacity: "0.5", cursor: "default", pointerEvents: "none" }}>
            Подробнее  <i className="fas fa-arrow-right"></i>
        </Link> :
        <Link to={`/${path}`}>
            Подробнее  <i className="fas fa-arrow-right"></i>
        </Link>);

    function handleClick(e) {
        if (!e.target.closest('.journey-container.small-screen.active')) {
            document.querySelectorAll('.active').forEach(item => item.classList.remove('active'));
        }
        e.target.closest('.journey-container.small-screen').classList.toggle('active');
    }

    return (
        <>
            <div className='journey-container'
                onMouseOver={() => setHoverClass(true)}
                onMouseOut={() => setHoverClass(false)}
            >
                <h6>{title}</h6>
                <p className='card'>{text}</p>
                {hoverClass && disabledLinkStyle}
            </div>

            <div className='journey-container small-screen'
                onClick={handleClick}
            >
                <div className='small-screen-title'>
                    <h6>{title} </h6>
                    <span className='journey-arrow'></span>
                </div>
                <div className='small-screen-info'>
                    <p className='card'>{text}</p>
                    {disabledLinkStyle}
                </div>
            </div>
        </>
    )
}