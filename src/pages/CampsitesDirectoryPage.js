//import React, { useState } from 'react';
//import CampsiteDetail from '../features/campsites/CampsiteDetail';
//import { selectCampsiteById, selectRandomCampsite } from '../features/campsites/campsitesSlice';
import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';

const CampsitesDirectoryPage = () => {
    return (
      <Container>
        <CampsitesList />
      </Container>
  );
};

export default CampsitesDirectoryPage;