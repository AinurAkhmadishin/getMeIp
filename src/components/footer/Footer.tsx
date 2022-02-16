import React from 'react';
import cn from 'classnames';
import './footer.scss';
import tg from '../../assets/icons/telegram.png';
import vk from '../../assets/icons/vkontakte.png';

export const Footer = () => {
  return (
    <footer className={cn('page-footer', 'footer')}>
      <div>© 2022.Ainur.Akhmadishin. All rights reserved.</div>
      <a href="https://t.me/ainur_akhmadishin" target="_blank" rel="noreferrer">
        <img src={tg} alt="Telegram" width="24" height="24" />
      </a>
      <a href="https://vk.com/ainur_akhmadishin" target="_blank" rel="noreferrer">
        <img src={vk} alt="Vkontakte" width="24" height="24" />
      </a>
    </footer>
  );
};
