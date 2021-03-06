import React from 'react';

import { FaFolderOpen } from 'react-icons/all';
import { Container, Body } from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Button icon={FaFolderOpen} label="OBS" action="foi para OBS Page" />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </Body>
    </Container>
  );
};

export default Home;
