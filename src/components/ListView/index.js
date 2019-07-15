import React from 'react';
import { ListGroup } from 'reactstrap';
import AvengerImgComponent from '../AvengersSection/Image';
import ListItemComponent from './ListItem';
import LoaderComponent from '../Loader';
import AvengerContext from '../../context/avenger-context';
import { provideContext } from '../provideContextHOC';

function AvengerListView(props) {
  let className = '';
  const avengerList = props.avengerData.map(avenger => {
    if (
      props.selectedAvenger !== null &&
      props.selectedAvenger === avenger.name
    ) {
      className = 'selectedAvengerStyle';
    } else {
      className = '';
    }
    return (
      <ListItemComponent
        className={className}
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
  });

  return (
    <section className="listGroupParent">
      <ListGroup
        onScroll={props.handleFetchOnScroll}
        className="listGroupStyle">
        {avengerList}
        {props.isLoadingOnScroll && <LoaderComponent />}
      </ListGroup>
    </section>
  );
}

export default provideContext(AvengerListView);
