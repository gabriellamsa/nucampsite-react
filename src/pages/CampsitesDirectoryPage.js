//import React, { useState } from 'react';
//import CampsiteDetail from '../features/campsites/CampsiteDetail';
//import { selectCampsiteById, selectRandomCampsite } from '../features/campsites/campsitesSlice';
import { Container, Row } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
    return (
      <Container>
        <SubHeader current='Directory' />
        <Row>
          <CampsitesList />
        </Row>
      </Container>
  );
};

export default CampsitesDirectoryPage;