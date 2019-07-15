import React from 'react';
import ViewChoiceComponent from '../../ViewChoice';

function AvengerDisplayComponent(props) {
  return (
    <section>
      <ViewChoiceComponent value="List View" name="viewType">
        {' '}
        List View
      </ViewChoiceComponent>
      <ViewChoiceComponent value="Card View" name="viewType">
        {' '}
        Card View
      </ViewChoiceComponent>

      {props.render()}
    </section>
  );
}
export default AvengerDisplayComponent;
