import styled from 'styled-components';

export default styled.button`
  display: block;
  padding: 20px 30px;
  background-color: #ff3300;
  border: none;
  color: white;
  text-transform: uppercase;
  font-family: 'MuseoSans-Regular', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: white;
    color: #ff3300;
  }
`;
