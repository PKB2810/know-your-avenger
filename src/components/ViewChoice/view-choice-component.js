import React from 'react';
import AvengerContext from '../../context/avenger-context';

class ViewChoiceComponent extends React.Component {
  render() {
    return (
      <>
        <AvengerContext.Consumer>
          {context => (
            <label>
              <input
                type="radio"
                value={this.props.value}
                name={this.props.name}
                checked={context.view === this.props.value}
                onChange={e => context.onViewChange(this.props.value)}
              />
              {this.props.children}
            </label>
          )}
        </AvengerContext.Consumer>
      </>
    );
  }
}
export default ViewChoiceComponent;
