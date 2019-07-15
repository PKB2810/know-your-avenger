import React from 'react';
import AvengerContext from '../../context/avenger-context';

function ViewChoiceComponent(props) {
  return (
    <AvengerContext.Consumer>
      {context => (
        <label>
          <input
            type="radio"
            value={props.value}
            name={props.name}
            checked={context.view === props.value}
            onChange={e => context.onViewChange(props.value)}
          />
          {props.children}
        </label>
      )}
    </AvengerContext.Consumer>
  );
}
export default ViewChoiceComponent;
