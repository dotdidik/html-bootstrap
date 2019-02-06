import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import "../assets/style/Carousel.css";

class AppCarousel extends Component {
  constructor(props) {
    super(props);

    //this from reactstrap

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);

    //this is own const
    this.state = {
        activeIndex: 0,

        items: [
              {
                id: '070435709370549374',
                src: 'https://i.ytimg.com/vi/V015SjjbYXE/maxresdefault.jpg',
                altText: 'Slide 1',
                caption: 'Slide 1'
              },
              {
                id: '5328258720395702935',
                src: 'https://kucingpedia.com/wp-content/uploads/2017/11/cara-mengobati-kucing-yang-demam.jpg',
                altText: 'Slide 2',
                caption: 'Slide 2'
              },
              {
                id: '75309275095720957092',
                src: 'https://i.ytimg.com/vi/V015SjjbYXE/maxresdefault.jpg',
                altText: 'Slide 3',
                caption: 'Slide 3'
              }
        ]
    }
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    console.log('ini data', this.state.items)
    const { activeIndex } = this.state;

    const slides = this.state.items.map((item, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <img className="carousel-img" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={this.state.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default AppCarousel;