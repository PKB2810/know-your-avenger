import React from 'react';
import AvengerContext from '../../context/avenger-context';

export const provideContext = WrappedComponent => {
  return function ContextConsumerHOC(props) {
    return (
      <AvengerContext.Consumer>
        {context => <WrappedComponent {...props} {...context} />}
      </AvengerContext.Consumer>
    );
  };
};

export default provideContext;
