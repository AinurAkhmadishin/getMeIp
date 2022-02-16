import React, { FC } from 'react';
import './article.scss';

interface IArticle {
  ip: string;
  city: string;
  timezone: string;
  region: string;
}

export const Article: FC<IArticle> = ({ ip, city = 'нет данных', timezone = 'нет данных', region = 'нет данных' }) => {
  return (
    <section className="article">
      <div>
        IP:
        <span> {ip}</span>
      </div>
      <div>
        City:
        <span> {city}</span>
      </div>
      <div>
        Timezone:
        <span> {timezone}</span>
      </div>
      <div>
        Region:
        <span> {region}</span>
      </div>
    </section>
  );
};
