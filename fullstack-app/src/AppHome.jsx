import React from 'react';
import AppHead from './AppHead';
import AppCarousel from './components/AppCarousel';
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter,         Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Row, 
  Col  } from 'reactstrap';
import AppCard from './components/AppCard';
import axios from 'axios';

class AppHome extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      modal2: false,
      datas: []
    };
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.merubahKembali = this.merubahKembali.bind(this)
  }

  componentDidMount(){
    axios.get('https://reduxblog.herokuapp.com/api/posts?key=didik')
    .then(res => {
      this.setState({datas:res.data});
      console.log('hallo',res.data)
    })
  }

  merubahKembali(){
    axios.get('https://reduxblog.herokuapp.com/api/posts?key=didik')
    .then(res => {
      this.setState({datas:res.data});
      console.log('saya berubah',res.data)
    })
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
      datas: [
        {
          id:"1",
          title: "saya beribah",
          categories: "https://ssvr.bukukita.com/babacms/displaybuku/107941_f.jpg",
          content:"hihihi",
          test: 'hahaha'
        }
      ]
    }))
  }

  toggle2() {
    this.setState(nextState => ({
      modal2: !nextState.modal2,
      modal: false
    }))
  }
      render() {
          return(
            <div>
              <AppHead />
              <div>
                <Button color="danger" onClick={this.toggle}>BAHAYA</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle2}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
                  <ModalHeader toggle={this.toggle2}>Modal title</ModalHeader>
                  <ModalBody>
                    ini adalah modal 2
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle2}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle2}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>
              <Container>
              <Button onClick={this.merubahKembali}>Merubah</Button>
                  {
                    this.state.datas.map(post => 
                      <Col key={post.id} className="card-gue" md="4">
                                    <Card>
                                        <CardImg top width="100%" src={post.categories} alt="Card image cap" />
                                        <CardBody>
                                        <CardTitle>{post.title}</CardTitle>
                                        <CardSubtitle>{post.content}</CardSubtitle>
        
                                        </CardBody>
                                    </Card>
                                </Col> 
                    )
                  }
              </Container>
            </div>
          )
      }
}

export default AppHome;
