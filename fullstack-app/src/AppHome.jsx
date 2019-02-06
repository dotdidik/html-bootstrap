import React from 'react';
import AppHead from './AppHead';
import AppCarousel from './components/AppCarousel';
import { Container} from 'reactstrap';
import AppCard from './components/AppCard';

class AppHome extends React.Component {
      render() {
          return(
            <div>
              <AppHead />
              <AppCarousel />
              <Container>
                <AppCard />
              </Container>
            </div>
          )
      }
}

export default AppHome;
