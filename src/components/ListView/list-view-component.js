import React from 'react';
import { ListGroup } from 'reactstrap';
import AvengerImgComponent from '../AvengersSection/img-component';
import ListItemComponent from './list-item-component';
import LoaderComponent from '../Loader/loader-component';
import AvengerContext from '../../context/avenger-context';

class AvengerListView extends React.Component {
  static contextType = AvengerContext;
  render() {
    let className = '';
    const avengerList = this.context.avengerData.map(avenger => {
      if (
        this.context.selectedAvenger !== null &&
        this.context.selectedAvenger === avenger.name
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
      <AvengerContext.Consumer>
        {context => (
          <section className="listGroupParent">
            <ListGroup
              onScroll={e => context.handleFetchOnScroll(e)}
              className="listGroupStyle">
              {avengerList}
              {context.isLoadingOnScroll && <LoaderComponent />}
            </ListGroup>
          </section>
        )}
      </AvengerContext.Consumer>
    );
  }
}
export default AvengerListView;
