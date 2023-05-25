// import social network icons from img folder
// import phoneIcon from './img/phone.svg';
// import envelope from './img/envelope.svg';
import instagram from './img/instagram.svg';
import telegram from './img/telegram.svg';
import React from "react";

const Socials = () => (
    <>
        <a
            href="https://t.me/dodon83"
            target="_blank"
        >
            <img className="box-hover" src={telegram} />
        </a>
        <a href='https://instagram.com/diagnost2k.ru?igshid=YmMyMTA2M2Y' target='_blank'>
            <img className='box-hover' src={instagram} />
        </a>
    </>
)

export default Socials;