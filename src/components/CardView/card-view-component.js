import React from "react";
import CardItemComponent from "./card-item-component";

class AvengerCardComponent extends React.Component{

        render(){
          let className = "";
          const avengerCardList = this.props.avengerList.map(
                    avenger => {
                                 if (
                                   this.props
                                     .selectedAvenger !==
                                     null &&
                                   this.props
                                     .selectedAvenger ===
                                     avenger.avenger_name
                                 ) {
                                   className =
                                     "selectedAvengerStyle";
                                 } else {
                                   className =
                                     "";
                                 }
                                 return (
                                   <CardItemComponent
                                   className={className}
                                     avengerId={
                                       avenger.avenger_id
                                     }
                                     avengerName={
                                       avenger.avenger_name
                                     }
                                     avengerImage={
                                       avenger.avenger_image
                                     }
                                     handleSelectedAvenger={
                                       this
                                         .props
                                         .handleSelectedAvenger
                                     }
                                   />
                                 );
                               }
                  );
                  return <section  >{avengerCardList}</section>;
                }

}

export default AvengerCardComponent;