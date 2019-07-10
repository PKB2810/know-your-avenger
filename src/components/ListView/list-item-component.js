import React from "react";
import {ListGroupItem} from "reactstrap";

class ListItemComponent extends React.Component{


    render(){

            return(
                <ListGroupItem className={this.props.className}
                key={this.props.avengerId}
                onClick={() =>
                  this.props.handleSelectedAvenger(
                    this.props.avengerName
                  )}>
                    {this.props.children}
                </ListGroupItem>
            )

    }

}
export default ListItemComponent;
