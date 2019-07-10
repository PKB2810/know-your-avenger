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
                                     avenger.name
                                 ) {
                                   className =
                                     "selectedAvengerStyle";
                                 } else {
                                   className =
                                     "";
                                 }
                                 return (
                                   
                                     <CardItemComponent
                                       className={
                                         className +
                                         " cardBodyStyle"
                                       }
                                       avengerId={
                                         avenger.id
                                       }
                                       avengerName={
                                         avenger.name
                                       }
                                       avengerImage={
                                         avenger
                                           .thumbnail
                                           .path +
                                         "." +
                                         avenger
                                           .thumbnail
                                           .extension
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
                  return <section style={{maxHeight:"500px",overflow:"auto"}} >{avengerCardList}</section>;
                }

}

export default AvengerCardComponent;