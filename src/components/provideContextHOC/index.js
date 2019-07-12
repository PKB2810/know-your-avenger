import React from 'react';
import AvengerContext from '../../context/avenger-context';

export const provideContext = WrappedComponent => {
  return class ContextConsumerHOC extends React.Component {
    render() {
      return (
        <AvengerContext.Consumer>
          {context => <WrappedComponent {...this.props} {...context} />}
        </AvengerContext.Consumer>
      );
    }
  };
};
