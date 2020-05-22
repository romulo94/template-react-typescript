import React, { FC } from 'react';

import { Container as Default } from './styles';

interface Props {
  fullScreen?: boolean;
}

const Container: FC<Props> = ({ children, fullScreen }) => (
  <Default fullScreen={fullScreen}>{children}</Default>
);

export default Container;
