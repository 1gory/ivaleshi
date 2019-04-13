import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: ${({ display }) => (display ? 'flex' : 'none')};
  padding: 30px;
  & iframe {
    width: 100%;
    height: 500px;
  }
`;

export default ({ visible, modalOpen }) => (
  <Wrapper display={visible}>
    <iframe
      src={modalOpen ? 'https://www.youtube.com/embed/E7wJTI-1dvQ' : ''}
      frameBorder="0"
      allowFullScreen
      title="video"
    />
  </Wrapper>
);
