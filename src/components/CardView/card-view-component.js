import React from 'react';
import CardItemComponent from './card-item-component';
import LoaderComponent from '../Loader/loader-component';
import AvengerContext from '../../context/avenger-context';

class AvengerCardComponent extends React.Component {
  static contextType = AvengerContext;
  render() {
    let className = '';
    const avengerCardList = this.context.avengerData.map(avenger => {
      if (
        this.context.selectedAvenger !== null &&
        this.context.selectedAvenger === avenger.name
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
      <AvengerContext.Consumer>
        {context => (
          <section
            onScroll={e => this.context.handleFetchOnScroll(e)}
            style={{ maxHeight: '500px', overflow: 'auto' }}>
            {avengerCardList}
            {this.context.isLoadingOnScroll && <LoaderComponent />}
          </section>
        )}
      </AvengerContext.Consumer>
    );
  }
}

export default AvengerCardComponent;
