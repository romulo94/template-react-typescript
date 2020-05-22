import React, { FC } from 'react';

import { useRouteMatch } from 'react-router-dom';
import Container from 'components/Container';
import { Card } from './styles';

const Home: FC<JSX.Element> = () => {
  const { path } = useRouteMatch();

  return (
    <Container fullScreen>
      <Card>
        <h1>Seu path é : {path} </h1>
      </Card>
    </Container>
  );
};

export default Home;
