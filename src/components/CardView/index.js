import React from 'react';
import CardItemComponent from './CardItem';
import LoaderComponent from '../Loader';
import { provideContext } from '../provideContextHOC';

function AvengerCardComponent(props) {
  return (
    <section
      onScroll={props.handleFetchOnScroll}
      style={{ maxHeight: '100%', overflow: 'auto' }}>
      {props.avengerData.map(avenger => {
        return (
          <CardItemComponent
            className={
              props.selectedAvenger === avenger.name
                ? 'selectedAvengerStyle cardBodyStyle'
                : 'cardBodyStyle'
            }
            avengerId={avenger.id}
            avengerName={avenger.name}
            avengerImage={
              avenger.thumbnail.path + '.' + avenger.thumbnail.extension
            }
          />
        );
      })}
      {props.isLoadingOnScroll && <LoaderComponent />}
    </section>
  );
}

export default provideContext(AvengerCardComponent);
