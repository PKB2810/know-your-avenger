import React from 'react';
import ViewChoiceComponent from '../ViewChoice/view-choice-component';

class AvengerDisplayComponent extends React.Component {
  render() {
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

        {this.props.render()}
      </section>
    );
  }
}
export default AvengerDisplayComponent;
