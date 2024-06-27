import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
  const item = [selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartner()];

  return (
    <Row>
      {item.map((item, idx) => {
        return (
          <Col md className='m-1' key={idx}>
            <DisplayCard item={item} />
          </Col>
        );
      })}
    </Row>
  );
};

export default DisplayList;