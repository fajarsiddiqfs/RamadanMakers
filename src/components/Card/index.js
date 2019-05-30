import React from 'react';

import logo from '../../images/Ramadan-Logo-Dark.jpg';
import { Container, Wrapper, Image, ProjectInfo, ProjectName, ProjectMaker } from './styles';

const Card = ({ item }) => (
  <Container>
    <Wrapper href={`https://${item.website}`} target="_blank" rel="noopener noreferrer">
      <Image
        src={`//logo.clearbit.com/${item.website}`}
        alt={item.appname}
        onError={e => {
          e.target.onerror = null;
          e.target.src = logo;
        }}
      />
      <ProjectInfo>
        <ProjectName>{item.appname}</ProjectName>
        <ProjectMaker>{item.maker}</ProjectMaker>
      </ProjectInfo>
    </Wrapper>
  </Container>
);

export default Card;
