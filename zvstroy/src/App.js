import logoZvstroy from './images/logo.svg';
import logoRus from './images/россия.svg';
import iconPhone from './images/phone.svg';
import iconWhatsapp from './images/whatsapp.svg';
import iconVider from './images/viber.svg';
import iconMail from './images/mail.svg';

import './index.css';
import React from 'react';
function App() {
  return (
    <div className="page">
      <header className="header">
        <div className='header__container'>
          <div className='header__plase'>
          <img className="header__image" alt="Логотип ЗВСтрой" src={logoZvstroy}/>
          <h2 className='header__title'>ЗВ.СРОЙ</h2> 
          </div>
           <h3 className='header__subtitle'>опыт работы более 10 лет</h3>
          <div className="header__contacts">
            <div className='header__phone'>
            <img alt="иконка телефон" src={iconPhone} class="header__phone__icon"></img>
          <img alt="иконка вотсап" src={iconWhatsapp} class="header__phone__icon"></img>
          <img alt="иконка вайбер" src={iconVider} class="header__phone__icon"></img>
          <a  class="header__link"  href="tel: +89054723415">+7 (905) 4723415</a>
          </div>
            <div className='header__email'>
            <img alt="иконка электронная почта" src={iconMail} class="header__phone__icon"></img>
          <a class="header__link" href="mailto: zv98@yandex.ru">zv98@yandex.ru</a>
            </div>
          </div>
        </div>
      </header>
<main>
<section class="lead">
                <h2 class="lead__title">Услуги поразработке, ведению исполнительной документации для заказчиков и подоядчиков</h2>
                <p class="lead__subtitle">Акты, исполнительные схемы, журналы работ, паспорта и сертификаты. Соответствие нормативам.</p>
                <div class='lead__info'>
                <p class="lead__discription">заказать исполнительную документацию</p>
                
                <button class='popup__submit-button'>Заказать сейчас</button>
       </div>
        </section>

</main>
    </div>
  );
}

export default App;
