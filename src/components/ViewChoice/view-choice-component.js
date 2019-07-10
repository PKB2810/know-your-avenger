import React from "react";


class ViewChoiceComponent extends React.Component{

    render(){
        return(
            <>
            <label>
            <input
              type="radio"
              value={this.props.value}
              name={this.props.name}
              checked={this.props.checked}
              onChange={e => this.props.onChangeHandler(this.props.value)}
            />
            {this.props.children}
          </label>
          </>
        )





    }





}
export default ViewChoiceComponent;