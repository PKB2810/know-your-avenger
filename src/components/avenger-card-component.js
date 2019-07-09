import React from "react";
import {Card, CardImg,CardBody,CardTitle} from "reactstrap";

class AvengerCardComponent extends React.Component{

        constructor(props){
            super(props);

        }
        render(){
                  const avengerCardList = this.props.avengerList.map(
                    avenger => {
                        if(this.props.selectedAvenger!== null && this.props.selectedAvenger===avenger.avenger_name){
                            return (
                              <div
                                style={{
                                  width: "200px",
                                  display:
                                    "inline-block"
                                }}
                              >
                                <Card
                                  className="selectedAvengerStyle"
                                  key={
                                    avenger.avenger_id
                                  }
                                  onClick={() =>
                                    this.props.handleSelectedAvenger(
                                      avenger.avenger_name
                                    )
                                  }
                                >
                                  <CardImg
                                    top
                                    width="20px"
                                    height="200px"
                                    src={
                                      avenger.avenger_image
                                    }
                                  />
                                  <CardBody
                                    style={{
                                      backgroundColor:
                                        "#f1f1f1"
                                    }}
                                  >
                                    <div>
                                      <CardTitle>
                                        {
                                          avenger.avenger_name
                                        }
                                      </CardTitle>
                                    </div>
                                  </CardBody>
                                </Card>
                              </div>
                            );
                        }else{
                            return(
                                <div style={ {width:"200px",display:"inline-block"}} >
                                <Card key={avenger.avenger_id} onClick={() => this.props.handleSelectedAvenger(avenger.avenger_name)}>
                                <CardImg
                                  top
                                  width="20px"
                                  height="200px"
                                  src={avenger.avenger_image}
                                />
                                <CardBody>
                                  <CardTitle>
                                    {avenger.avenger_name}
                                  </CardTitle>
                                </CardBody>
                              </Card>
                              </div>
                            )
                        
                        }
                      
                    }
                  );
                  return <section  >{avengerCardList}</section>;
                }

}

export default AvengerCardComponent;