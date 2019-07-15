import React from 'react';
import CardItemComponent from './CardItem';
import LoaderComponent from '../Loader';
import { provideContext } from '../provideContextHOC';

function AvengerCardComponent(props) {
  let className = '';
  const avengerCardList = props.avengerData.map(avenger => {
    if (
      props.selectedAvenger !== null &&
      props.selectedAvenger === avenger.name
    ) {
      className = 'selectedAvengerStyle';
    } else {
      className = '';
    }
    return (
      <CardItemComponent
        className={className + ' cardBodyStyle'}
        avengerId={avenger.id}
        avengerName={avenger.name}
        avengerImage={
          avenger.thumbnail.path + '.' + avenger.thumbnail.extension
        }
      />
    );
  });
  return (
    <section
      onScroll={props.handleFetchOnScroll}
      style={{ maxHeight: '500px', overflow: 'auto' }}>
      {avengerCardList}
      {props.isLoadingOnScroll && <LoaderComponent />}
    </section>
  );
}

export default provideContext(AvengerCardComponent);
