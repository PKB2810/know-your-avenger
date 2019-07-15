import React from 'react';
import { ListGroup } from 'reactstrap';
import AvengerImgComponent from '../AvengersSection/Image';
import ListItemComponent from './ListItem';
import LoaderComponent from '../Loader';
import { provideContext } from '../provideContextHOC';

function AvengerListView(props) {
  return (
    <section className="listGroupParent">
      <ListGroup
        onScroll={props.handleFetchOnScroll}
        className="listGroupStyle">
        {props.avengerData.map(avenger => {
          return (
            <ListItemComponent
              className={
                props.selectedAvenger === avenger.name
                  ? 'selectedAvengerStyle'
                  : ''
              }
              avengerId={avenger.id}
              avengerName={avenger.name}>
              <AvengerImgComponent
                src={avenger.thumbnail.path + '.' + avenger.thumbnail.extension}
                width="80px"
                height="80px"
                style={{ borderRadius: '50%' }}
              />
              {avenger.name}
            </ListItemComponent>
          );
        })}
        {props.isLoadingOnScroll && <LoaderComponent />}
      </ListGroup>
    </section>
  );
}

export default provideContext(AvengerListView);
