import React from 'react';
import { provideContext } from '../provideContextHOC';
import AvengerDisplayComponent from '../AvengersSection/Display';
import AvengerInfoComponent from '../AvengersSection/Info';
import AvengerListView from '../ListView';
import AvengerCardView from '../CardView';
import LoaderComponent from '../Loader';

class MainComponent extends React.Component {
  render() {
    return (
      <>
        {!this.props.isLoading && (
          <AvengerDisplayComponent
            render={() => {
              if (this.props.view === 'List View') return <AvengerListView />;
              else return <AvengerCardView />;
            }}
          />
        )}
        {!this.props.isLoading ? <AvengerInfoComponent /> : <LoaderComponent />}
      </>
    );
  }
}
export default provideContext(MainComponent);
