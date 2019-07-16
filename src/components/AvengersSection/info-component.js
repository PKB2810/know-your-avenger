import React from 'react';
import { Media } from 'reactstrap';
import AvengerContext from '../../context/avenger-context';
import { Modal } from 'react-bootstrap';
import AvengerImgComponent from '../AvengersSection/img-component';
import Description from '../Description/description-component';
class AvengerInfoComponent extends React.Component {
  static contextType = AvengerContext;
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  handleClose = () => {
    this.context.handleSelectedAvenger(null);
  };

  render() {
    if (this.context.selectedAvenger) {
      const selectedAvengerObj = this.context.avengerData.filter(
        avenger => avenger.name === this.context.selectedAvenger
      )[0];
      return (
        <section>
          <Modal show={!this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedAvengerObj.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="mediaParent">
                <AvengerImgComponent
                  src={
                    selectedAvengerObj.thumbnail.path +
                    '.' +
                    selectedAvengerObj.thumbnail.extension
                  }
                  width="80px"
                  height="80px"
                  alt={selectedAvengerObj.name}
                />
                <Description className="avengerModalDescription">
                  {selectedAvengerObj.description.trim() === ''
                    ? 'No information available'
                    : selectedAvengerObj.description}
                </Description>
              </div>
            </Modal.Body>
          </Modal>
        </section>
      );
    }
  }
}
export default AvengerInfoComponent;
