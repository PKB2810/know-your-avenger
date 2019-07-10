import React from 'react';
import { Media } from 'reactstrap';
import AvengerContext from '../../context/avenger-context';

class AvengerInfoComponent extends React.Component {
  static contextType = AvengerContext;
  render() {
    if (this.context.selectedAvenger) {
      const selectedAvengerObj = this.context.avengerData.filter(
        avenger => avenger.name === this.context.selectedAvenger
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
