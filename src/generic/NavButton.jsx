import styled from 'styled-components';

export default styled.button`
  border: solid 1px #ff3300;
  background: none;
  text-transform: uppercase;
  color: #ff3300;
  font-family: 'Museo-Regular', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
  a {
    display: block;
    padding: 20px 30px;
  }
  &:hover {
    background-color: #ff3300;
    color: white;
  }
  @media screen and (max-width: 991px) {
    display: block;
    margin: auto;
    width: 100%;
    margin-bottom: 60px;
  }
`;
