import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="container">
            <hr></hr>
            <div className="footer-column">
                <Link to="/">
                    <img className='header-logo' src="./images/icons/new-logo.png" alt="Nautika"></img>
                </Link>
                <nav>
                    <h6>Навигация</h6>
                    <ul>
                        <li><Link to='/services'>Услуги</Link></li>
                        <li><Link to='/certificates'>Сертификаты</Link></li>
                        <li><Link to='/about'>О нас</Link></li>
                        <li><Link to='/weather'>Погода</Link></li>
                        <li><Link to='/contacts'>Контакты</Link></li>
                    </ul>
                </nav>
                <div>
                    <h6>Адрес</h6>
                    <ul>
                        <li>г. Новосибирск</li>
                        <li>ул. Бердский тупик 9/1</li>
                        <li>Пляж «Звезда»</li>
                        <li>Яхт-клуб «Наука»</li>
                    </ul>
                </div>
                <div>
                    <h6>Контакты</h6>
                    <ul>
                        <li>+7 869 468 48 68</li>
                        <li><a href="mailto:nautica@mail.ru">nautica@mail.ru</a></li>
                    </ul>
                    <div className="footer-icons">
                        <img src="./images/icons/tg-icon.png" alt="tg"></img>
                        <img src="./images/icons/wa-icon.png" alt="wa"></img>
                        <img src="./images/icons/vk-icon.png" alt="vk"></img>
                        <img src="./images/icons/inst-icon.png" alt="inst"></img>
                    </div>
                </div>
            </div>
            <p><Link to='/privacy'>Политика конфиденциальности</Link></p>
        </footer>
    )
}