import React from "react";
import {ListGroup } from "reactstrap";
import AvengerImgComponent from "../AvengersSection/img-component";
import ListItemComponent from "./list-item-component";

class AvengerListView extends React.Component{
    
    render(){
        let className="";
        const avengerList = this.props.avengerList.map((avenger) => {
            if(this.props.selectedAvenger!== null && this.props.selectedAvenger===avenger.avenger_name){
                className="selectedAvengerStyle";
            }else{
                className=""
            }

                return (
                  <ListItemComponent
                    className={className}
                    avengerId={avenger.avenger_id}
                    avengerName={avenger.avenger_name}
                    handleSelectedAvenger={
                      this.props.handleSelectedAvenger
                    }
                  >
                    <AvengerImgComponent
                      src={avenger.avenger_list_image}
                      width="80px"
                      height="80px"
                      style={{ borderRadius: "50%" }}
                    />
                    {avenger.avenger_name}
                  </ListItemComponent>
                );

            
        })

        return (
          <section className="listGroupParent" >
            <ListGroup className="listGroupStyle">{avengerList}</ListGroup>
          </section>
        );


    }

}
export default AvengerListView;