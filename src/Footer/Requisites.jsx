import React from 'react';
import styled from 'styled-components';
import { PaddingGrid as Grid, PaddingRow as Row, PaddingCol as Col } from '../grid';

const Wrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 60px;
  font-family: 'Museo-Regular', sans-serif;
  font-size: 14px;
`;

const Text = styled.p`
  padding-top: 5px;
  margin: 0;
`;

const Description = styled.span`
  display: block;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const BolderText = styled.span`
  font-weight: bolder;
`;

const Link = styled.a`
  font-weight: bolder;
  text-decoration: none;
  color: #000;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col lg={8} xs={12}>
          {' '}
          <Text>
            Вы всегда можете связаться с нами в указанное время:
            {' '}
            <BolderText> Ежедневно с 9:00 до 19:00</BolderText>
          </Text>
          <Text>
            По телефону:
            {' '}
            <Link href="tel:+7 (999) 999-56-55">+7 (999) 999-56-55</Link>
          </Text>
          <Text>
            Электронная почта:
            {' '}
            <Link href="mailto:Info@ivaleshi.ru">Info@ivaleshi.ru</Link>
          </Text>
          <Text>Доставка по всей России</Text>
          <Text>
            Заказы на сайте можно делать
            {' '}
            <BolderText> круглосуточно</BolderText>
          </Text>
          <Description>
            <BolderText>Ivaleshi.ru</BolderText>
            {' '}
осуществляет доставку по многим регионам Российской
            Федерации. Мы можем предложить Вам доставку курьером или самовывозом из курьерской
            службы, а еще быстрый и удобный процесс оформления заказа.
          </Description>
        </Col>
        <Col lg={4} xs={12}>
          <BolderText>Реквизиты</BolderText>
          <Text>
            ИП Шанченко Игорь Игоревич
            <br />
            ИНН 711202587526
            <br />
            ОГРН 316715400081373
            <br />
            Юр. адрес: Тульская область, г. Богородицк, Восточный МКР, д.4, кв.8
            <br />
            Фактический адрес: г.Москва 3-й Михалковский пер. д.20 к.1
            {' '}
            <br />
            Банк: «Финансовая Корпорация Открытие»
            <br />
            БИК 044525999
            <br />
            р/с 40802810501270004153
          </Text>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
);
