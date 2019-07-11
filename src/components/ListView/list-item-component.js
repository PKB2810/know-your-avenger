import React from 'react';
import { ListGroupItem } from 'reactstrap';
import AvengerContext from '../../context/avenger-context';

class ListItemComponent extends React.Component {
  static contextType = AvengerContext;

  render() {
    return (
      <ListGroupItem
        className={'listItemStyle ' + this.props.className}
        key={this.props.avengerId}
        onClick={() =>
          this.context.handleSelectedAvenger(this.props.avengerName)
        }>
        {this.props.children}
      </ListGroupItem>
    );
  }
}
export default ListItemComponent;
