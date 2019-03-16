import step1 from './Card/step-1.svg';
import step2 from './Card/step-2.svg';
import step3 from './Card/step-3.svg';
import step4 from './Card/step-4.svg';

export default [
  {
    icon: step1,
    name: 'Заказ',
    text: 'Подбери свой дизайн или выбери понравившиеся валеши из каталога и оставь заявку',
    button: true,
  },
  {
    icon: step2,
    name: 'Оформление',
    text: 'Менеджер перезвонит и уточнит детали заказа',
    button: false,
  },
  {
    icon: step3,
    name: 'Доставка',
    text: 'Отправляем заказ в течение одного дня самым удобным способом',
    button: false,
  },
  {
    icon: step4,
    name: 'Любовь',
    text: 'Ты выглядишь великолепно с собственным уникальным дизайном',
    button: false,
  },
];