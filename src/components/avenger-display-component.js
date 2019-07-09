import React from "../../node_modules/react";
import AvengerContext from "../context/avenger-context";

class AvengerDisplayComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <section>
            <AvengerContext.Consumer>
              {context => (
                <>
                  <label>
                    <input
                      type="radio"
                      value="List View"
                      name="viewType"
                      checked={context.view ==="List View"}
                      onChange={e => context.onViewChange(e.target.value)}
                    />
                    List View
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Card View"
                      name="viewType"
                      checked={context.view ==="Card View"}
                      onChange={e => context.onViewChange(e.target.value)}
                    />
                    Card View
                  </label>
                  {this.props.render()}
                </>
              )}
             
            </AvengerContext.Consumer>
          </section>
  
        )
       

    }










}
export default AvengerDisplayComponent;