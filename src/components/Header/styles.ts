import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 597px;

  background: ${props => props.theme.colors.itens.background};

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 4px;

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

export const BackButton = styled.div`
  display: flex;
  justify-content: center;
  width: 56px;
  height: 50px;
  margin-right: 15px;

  background: ${props => props.theme.colors.itens.background};

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  :hover {
    background: ${props => shade(0.2, props.theme.colors.itens.background)};
    cursor: pointer;
  }
`;
