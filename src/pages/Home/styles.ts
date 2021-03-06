import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 13px;
  flex-direction: column;
  align-items: center;
`;
export const Body = styled.div`
  display: grid;
  margin-top: 56px;

  grid-template: repeat(2, 84px) / repeat(7, 84px);

  column-gap: 30px;
  row-gap: 45px;
`;
