import React from 'react';
import { ListGroup } from 'reactstrap';
import AvengerImgComponent from '../AvengersSection/img-component';
import ListItemComponent from './list-item-component';
import LoaderComponent from '../Loader/loader-component';

class AvengerListView extends React.Component {
  render() {
    let className = '';
    const avengerList = this.props.avengerList.map(avenger => {
      if (
        this.props.selectedAvenger !== null &&
        this.props.selectedAvenger === avenger.name
      ) {
        className = 'selectedAvengerStyle';
      } else {
        className = '';
      }

      return (
        <ListItemComponent
          className={className}
          avengerId={avenger.id}
          avengerName={avenger.name}
          handleSelectedAvenger={this.props.handleSelectedAvenger}>
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
          onScroll={e => this.props.handleFetchOnScroll(e)}
          className="listGroupStyle">
          {avengerList}
          {this.props.isLoadingOnScroll && <LoaderComponent />}
        </ListGroup>
      </section>
    );
  }
}
export default AvengerListView;
