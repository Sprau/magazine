import React from 'react';
import Map from './Map';
import s from './Footer.module.css';
import inst from '../../img/ic-instagram.svg';
import whatsapp from '../../img/ic-whatsapp.svg';

const ContactCard = ({ title, content }) => (
    <div className={`${s.card}`}>
        <p>{title}</p>
        <h3>{content}</h3>
    </div>
);

const SocialLinks = () => (
    <div className={`${s.links}`}>
        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
            <img src={inst} alt='Instagram' />
        </a>
        <a href='https://www.whatsapp.com/?lang=ru_RU' target='_blank' rel='noopener noreferrer'>
            <img src={whatsapp} alt='WhatsApp' />
        </a>
    </div>
);

export default function Footer() {
    return (
        <div className={`${s.footer}`}>
            <h2>Contact</h2>
            <div className={`${s.grid}`}>
                <ContactCard title="Phone" content="+7 (499) 350-66-04" />
                <div className={`${s.card}`}>
                    <p>Socials</p>
                    <SocialLinks />
                </div>
                <ContactCard title="Address" content="Dubininskaya Ulitsa, 96, Moscow, Russia, 115093" />
                <ContactCard title="Working hours" content="24 hours a day" />
            </div>
            <Map />
        </div>
    );
}