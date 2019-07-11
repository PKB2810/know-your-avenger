import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import AvengerContext from '../../context/avenger-context';

class CarouselViewComponent extends React.Component {
  static contextType = AvengerContext;
  constructor(props, context) {
    super(props, context);

    // this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex
    });
    if (selectedIndex === this.context.avengersCarousel.length - 1) {
      this.context.fetchDataOnCarouselSlide();
    } else {
      return;
    }
  };

  render() {
    const avengerCarouselItems = this.context.avengersCarousel.map(avenger => {
      return (
        <Carousel.Item>
          <div style={{ backgroundColor: 'black' }}>
            <img
              width="800px"
              height="400px"
              onSelect={this.handleSelect}
              src={avenger.thumbnail.path + '.' + avenger.thumbnail.extension}
              alt={avenger.name}
            />
            <Carousel.Caption style={{ position: 'relative' }}>
              <h3>{avenger.name}</h3>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      );
    });
    return (
      <AvengerContext.Consumer>
        {context => (
          <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
            {avengerCarouselItems}
          </Carousel>
        )}
      </AvengerContext.Consumer>
    );
  }
}

export default CarouselViewComponent;
