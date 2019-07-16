import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { provideContext } from '../../provideContextHOC';

function ListItemComponent(props) {
  return (
    <ListGroupItem
      className={'listItemStyle ' + props.className}
      key={props.avengerId}
      onClick={() => props.handleSelectedAvenger(props.avengerName)}>
      {props.children}
    </ListGroupItem>
  );
}
export default provideContext(ListItemComponent);
