import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import AvengerImgComponent from '../Image';
import Description from '../../Description';
import provideContext from '../../provideContextHOC';

function AvengerInfoComponent(props) {
  const [show] = useState(false);

  function handleClose() {
    props.handleSelectedAvenger(null);
  }

  if (props.selectedAvenger) {
    const selectedAvengerObj = props.avengerData.filter(
      avenger => avenger.name === props.selectedAvenger
    )[0];
    return (
      <section>
        <Modal show={!show} onHide={handleClose}>
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
                {selectedAvengerObj.description === ''
                  ? 'No information available'
                  : selectedAvengerObj.description}
              </Description>
            </div>
          </Modal.Body>
        </Modal>
      </section>
    );
  } else {
    return null;
  }
}
export default provideContext(AvengerInfoComponent);
