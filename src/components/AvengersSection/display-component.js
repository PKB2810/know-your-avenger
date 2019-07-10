import React from "react";
import AvengerContext from "../../context/avenger-context";
import ViewChoiceComponent from "../ViewChoice/view-choice-component";

class AvengerDisplayComponent extends React.Component{

    render(){
      
        return (
          <section>
            <AvengerContext.Consumer>
              {context => (
                <>
                  
                  <ViewChoiceComponent
                    value="List View"
                    name="viewType"
                    checked={context.view === "List View"}
                    onChangeHandler={context.onViewChange}
                  >
                    {" "}
                    List View
                  </ViewChoiceComponent>
                  <ViewChoiceComponent
                    value="Card View"
                    name="viewType"
                    checked={context.view === "Card View"}
                    onChangeHandler={context.onViewChange}
                  >
                    {" "}
                    Card View
                  </ViewChoiceComponent>
                  
                  {this.props.render()}
                </>
              )}
            </AvengerContext.Consumer>
          </section>
        );
       

    }










}
export default AvengerDisplayComponent;