import React from "react";
import {ListGroup ,ListGroupItem} from "reactstrap";
import AvengerContext from "../context/avenger-context";
import AvengerImgComponent from "./avenger-img-component";

class AvengerListView extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        const avengerList = this.props.avengerList.map((avenger) => {
            if(this.props.selectedAvenger!== null && this.props.selectedAvenger===avenger.avenger_name){
                return <ListGroupItem className="selectedAvengerStyle" key={avenger.avenger_id} onClick={() => this.props.handleSelectedAvenger(avenger.avenger_name)}>
                    <AvengerImgComponent src={avenger.avenger_list_image} width="80px" height="80px" style={{borderRadius:"50%"}}/>
                    {avenger.avenger_name}
                </ListGroupItem>
            }else{

                return <ListGroupItem key={avenger.avenger_id} onClick={() => this.props.handleSelectedAvenger(avenger.avenger_name)}>
                    <AvengerImgComponent src={avenger.avenger_list_image} width="80px" height="80px" style={{borderRadius:"50%"}}/>
                    {avenger.avenger_name}
                </ListGroupItem>

            }
        })

        return (
          <section className="listGroupParent" >
            <ListGroup className="listGroupStyle">{avengerList}</ListGroup>
          </section>
        );


    }

}
export default AvengerListView;