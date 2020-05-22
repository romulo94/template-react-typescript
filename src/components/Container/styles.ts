/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import styled, { css } from 'styled-components';
import colors from 'styles/colors';

interface IContainer {
  fullScreen?: boolean;
}

export const Container = styled.div<IContainer>`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;

  background-color: ${colors.secondary};

  ${(props) =>
    props.fullScreen &&
    css`
      height: 100vh;
    `}
`;
