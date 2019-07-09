import React from "react";
import {Media} from "reactstrap";
class AvengerInfoComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        if (this.props.selectedAvenger) {
          const selectedAvengerObj = this.props.avengerList.filter(
            avenger =>
              avenger.avenger_name === this.props.selectedAvenger
          )[0];
          return (
              <section>
            <Media>
              <Media left href="#">
                <Media
                  object
                  src={selectedAvengerObj.avenger_image}
                  width="500px"
                  height="500px"
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>{selectedAvengerObj.avenger_name}</Media>
                {selectedAvengerObj.avenger_description}
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