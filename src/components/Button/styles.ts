import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 84px;

  background: ${props => props.theme.colors.itens.background};

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  svg {
    width: 56px;
    height: 56px;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */

    text-align: center;
  }
  transition: background-color 0.2s;

  &.desabled {
    background: ${props => shade(0.2, props.theme.colors.itens.background)};

    p {
      color: ${props => shade(0.2, props.theme.colors.text)};
    }
    svg {
      color: ${props => shade(0.2, props.theme.colors.text)};
    }
  }
  :not(.desabled):hover {
    background: ${props => shade(0.2, props.theme.colors.itens.background)};
    cursor: pointer;

    p {
      color: ${props => shade(0.2, props.theme.colors.text)};
    }
    svg {
      color: ${props => shade(0.2, props.theme.colors.text)};
    }
  }
`;
