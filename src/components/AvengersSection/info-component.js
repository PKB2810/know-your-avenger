import React from 'react';
import { Media } from 'reactstrap';
class AvengerInfoComponent extends React.Component {
  render() {
    if (this.props.selectedAvenger) {
      const selectedAvengerObj = this.props.avengerList.filter(
        avenger => avenger.name === this.props.selectedAvenger
      )[0];
      return (
        <section>
          <Media className="mediaParent">
            <Media left href="#">
              <Media
                object
                src={
                  selectedAvengerObj.thumbnail.path +
                  '.' +
                  selectedAvengerObj.thumbnail.extension
                }
                width="500px"
                height="500px"
                alt="avenger"
              />
            </Media>
            <Media body>
              <Media heading>{selectedAvengerObj.name}</Media>
              {selectedAvengerObj.description}
            </Media>
          </Media>
        </section>
      );
    } else {
      return (
        <section>Click on any of the Avengers for further details.</section>
      );
    }
  }
}
export default AvengerInfoComponent;
