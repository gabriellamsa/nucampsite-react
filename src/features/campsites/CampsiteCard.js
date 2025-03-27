import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const CampsiteCard = ({ campsite }) => {
  const { id, image, name } = campsite;
  return (
    <Link to={`${id}`}>
      <Card>
        <CardImg
          width='100%'
          src={image}
          alt={name}
          style={{ height: '300px', objectFit: 'cover' }}
        />
        <CardImgOverlay>
          <CardTitle style={{
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            fontWeight: 'bold'
          }}>
            {name}
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
  );
};

export default CampsiteCard;