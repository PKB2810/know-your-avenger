import React from 'react';
import { Media } from 'reactstrap';
import AvengerContext from '../../context/avenger-context';
import { Modal } from 'react-bootstrap';

class AvengerInfoComponent extends React.Component {
  static contextType = AvengerContext;
  constructor(props) {
    super(props);
    this.state = { show: undefined };
  }
  componentDidMount() {
    this.setState({ show: true });
  }
  handleClose = () => {
    this.setState({ show: false });
  };
  componentWillUnmount() {
    this.setState({ show: true });
  }
  render() {
    if (this.context.selectedAvenger) {
      const selectedAvengerObj = this.context.avengerData.filter(
        avenger => avenger.name === this.context.selectedAvenger
      )[0];
      return (
        <section>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedAvengerObj.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                <Media body>{selectedAvengerObj.description}</Media>
              </Media>
            </Modal.Body>
          </Modal>
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
