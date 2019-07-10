import React from 'react';
import CardItemComponent from './card-item-component';
import LoaderComponent from '../Loader/loader-component';

class AvengerCardComponent extends React.Component {
  render() {
    let className = '';
    const avengerCardList = this.props.avengerList.map(avenger => {
      if (
        this.props.selectedAvenger !== null &&
        this.props.selectedAvenger === avenger.name
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
          handleSelectedAvenger={this.props.handleSelectedAvenger}
        />
      );
    });
    return (
      <section
        onScroll={e => this.props.handleFetchOnScroll(e)}
        style={{ maxHeight: '500px', overflow: 'auto' }}>
        {avengerCardList}
        {this.props.isLoadingOnScroll && <LoaderComponent />}
      </section>
    );
  }
}

export default AvengerCardComponent;
