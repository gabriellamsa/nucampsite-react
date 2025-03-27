import { Container, Row } from 'reactstrap';
import DisplayList from '../features/display/DisplayList.js';
import SubHeader from '../components/SubHeader.js';

const HomePage = () => {
  return (
    <Container>
      <SubHeader current='Home' />
      <Row>
        <DisplayList />
      </Row>
    </Container>
  );
};

export default HomePage;