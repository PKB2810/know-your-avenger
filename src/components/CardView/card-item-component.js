import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import AvengerContext from '../../context/avenger-context';

class CardItemComponent extends React.Component {
  static contextType = AvengerContext;

  render() {
    return (
      <div className="cardParentStyle">
        <Card
          key={this.props.avengerId}
          onClick={() =>
            this.context.handleSelectedAvenger(this.props.avengerName)
          }>
          <CardImg
            top
            width="20px"
            height="200px"
            src={this.props.avengerImage}
          />
          <CardBody className={this.props.className}>
            <CardTitle>{this.props.avengerName}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardItemComponent;
