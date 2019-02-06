import React, { Component } from 'react'
import { 
        Card, 
        CardImg, 
        CardText, 
        CardBody,
        CardTitle, 
        CardSubtitle, 
        Button, 
        Row, 
        Col 
    } from 'reactstrap';
import '../assets/style/Carousel.css'

//consume api with axios
import axios from 'axios';

class AppCard extends Component {
  constructor(props){
      super(props);

      this.state = {
        posts:[]
      }
  }

  componentDidMount(){
      axios.get('https://reduxblog.herokuapp.com/api/posts?key=fullstack')
      .then(response =>{
        this.setState({ 
            posts : response.data
            
        })
      })
      .catch(err => {
          console.log(err)
      })
  }

  render() {
    let sabargan;
    if(this.state.posts === []){
        sabargan =<div bacground='#000'>
                    <h1>SABAR GAN</h1>
                  </div>
    } else {
        sabargan = <Row>
                        {
                            this.state.posts.map((post, index)=>
                                <Col key={index} className="card-gue" md="4">
                                    <Card>
                                        <CardImg top width="100%" src={post.categories} alt="Card image cap" />
                                        <CardBody>
                                        <CardTitle>{post.title}</CardTitle>
                                        <CardSubtitle>{post.content}</CardSubtitle>
                                        <Button>Button</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
    }
    console.log('ini data state', this.state.posts)
    return (
      <div>
          {sabargan}
      </div>
    )
  }
}

export default AppCard;
