import React from 'react';
import styled from 'styled-components';
import iconPackage from './Card/package.svg';
import iconInfo from './Card/info.svg';
import iconGift from './Card/gift.svg';
import iconTruck from './Card/delivery-truck.svg';

const Checkmark = () => <span role="img" aria-label="white heavy check mark">✅</span>;

const Point = ({ text }) => (
  <span>
    <Checkmark />
    {text}
    <br />
  </span>
);

const Link = styled.a`
  color: #ff3300;
`;

const SizeTableLink = styled.span`
  color: #ff3300;
  text-decoration: underline;
  cursor: pointer;
`;

const Sizes = ({ openModal }) => (
  <span>
    {'В наличие всегда имеется 24 цвета. Размер, который подходит именно вам, вы всегда можете узнать по '}
    <br />
    <SizeTableLink onClick={() => openModal('size', 8)}>
      размерной таблице
    </SizeTableLink>
  </span>
);

export default [
  {
    icon: iconPackage,
    name: 'Наличие',
    text: <Sizes />,
  },
  {
    icon: iconTruck,
    name: 'Доставка',
    text: (
      <span>
        {'Отправляем валеши Почтой России и курьерской службой «СДЕК». Стоимость доставки и сроки зависят от региона'}
      </span>
    ),
  },
  {
    icon: iconInfo,
    name: 'Наши достижения в цифрах',
    text: (
      <span>
        <Point text="12 месяцев опыт успешной работы" />
        <Point text="Более 100 положительных отзывов" />
        <Point text="839 довольных клиентов за 2018 год" />
        <Point text="50000 запросов Валешей в Яндексе" />
        <Point text="Всегда в наличии 24 цвета" />
      </span>
    ),
  },
  {
    icon: iconGift,
    name: 'Акции',
    text: (
      <span>
        {'Мы регулярно проводим акции и розыгрыши в нашем '}
        <Link
          href="https://www.instagram.com/ivaleshi.ru/"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </Link>
        . Подписывайтесь, чтобы быть в курсе последних событий
      </span>
    ),
  },
];
