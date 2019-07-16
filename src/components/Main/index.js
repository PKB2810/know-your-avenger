import React from 'react';
import { provideContext } from '../provideContextHOC';
import AvengerDisplayComponent from '../AvengersSection/Display';
import AvengerInfoComponent from '../AvengersSection/Info';
import AvengerListView from '../ListView';
import AvengerCardView from '../CardView';
import LoaderComponent from '../Loader';

function MainComponent(props) {
  return (
    <>
      {!props.isLoading && (
        <AvengerDisplayComponent
          render={() => {
            if (props.view === 'List View') return <AvengerListView />;
            else return <AvengerCardView />;
          }}
        />
      )}
      {!props.isLoading ? <AvengerInfoComponent /> : <LoaderComponent />}
    </>
  );
}

export default provideContext(MainComponent);
