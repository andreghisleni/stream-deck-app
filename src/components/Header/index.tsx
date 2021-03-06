import React, { useCallback } from 'react';

import { Container, Content, BackButton } from './styles';
import backIconImg from '../../assets/back.svg';

const Header: React.FC = () => {
  const handleBack = useCallback(async () => {
    console.log('voltou');
  }, []);
  return (
    <Container>
      <BackButton onClick={handleBack}>
        <img src={backIconImg} alt="Back" />
      </BackButton>

      <Content>
        <h1>Stream deck</h1>
      </Content>
    </Container>
  );
};

export default Header;
