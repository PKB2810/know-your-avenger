import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import { provideContext } from '../../provideContextHOC';

function CardItemComponent(props) {
  return (
    <div className="cardParentStyle">
      <Card
        key={props.avengerId}
        onClick={() => props.handleSelectedAvenger(props.avengerName)}>
        <CardImg top width="20px" height="200px" src={props.avengerImage} />
        <CardBody className={props.className}>
          <CardTitle className="textStyle">{props.avengerName}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default provideContext(CardItemComponent);
