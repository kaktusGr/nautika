import React from "react";
import { HashLink } from 'react-router-hash-link';

export default function Map({ classInfo, idForm }) {
    return (
        <div className="map-container">
            <div className={classInfo ? "map-info " + classInfo : "map-info left"}>
                <h6>Свяжитесь с нами</h6>
                <div className="info">
                    <small>Наш адрес</small>
                    <p>г. Новосибирск, ул. Бердский тупик 9/1</p>
                    <small>Телефон</small>
                    <p>+7 869 468 48 68</p>
                    <small>Время работы</small>
                    <p>Ежедневно с 10:00 до 20:00</p>
                </div>
                <HashLink to={"/" + idForm + "#anchor-form-" + idForm}>
                    <button className="main-btn">Заказать обратный звонок</button>
                </HashLink>
            </div>

            <div className={classInfo ? "map " + classInfo : "map left"} >
                <iframe title="map" src="https://yandex.ru/map-widget/v1/?ll=83.051717%2C54.836438&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTk4MTkxOTM4EkbQoNC-0YHRgdC40Y8sINCd0L7QstC-0YHQuNCx0LjRgNGB0LosINCR0LXRgNC00YHQutC40Lkg0YLRg9C_0LjQuiwgOS8xIgoNcBmmQhUgWFtC&z=17.17" frameBorder="1" allowFullScreen={true} scroll="false"></iframe>
            </div>
        </div>
    )
}