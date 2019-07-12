import React from 'react';
import { provideContext } from '../provideContextHOC';
import AvengerDisplayComponent from '../AvengersSection/display-component';
import AvengerInfoComponent from '../AvengersSection/info-component';
import AvengerListView from '../ListView/list-view-component';
import AvengerCardView from '../CardView/card-view-component';
import LoaderComponent from '../Loader/loader-component';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.isLoading === false && (
          <AvengerDisplayComponent
            render={() => {
              if (this.props.view === 'List View') return <AvengerListView />;
              else return <AvengerCardView />;
            }}
          />
        )}
        {this.props.isLoading === false && <AvengerInfoComponent />}
        {this.props.isLoading && <LoaderComponent />}
      </>
    );
  }
}
export default provideContext(MainComponent);
