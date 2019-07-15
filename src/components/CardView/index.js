import React from 'react';
import CardItemComponent from './CardItem';
import LoaderComponent from '../Loader';
import AvengerContext from '../../context/avenger-context';
import { provideContext } from '../provideContextHOC';

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
      <section
        onScroll={this.props.handleFetchOnScroll}
        style={{ maxHeight: '500px', overflow: 'auto' }}>
        {avengerCardList}
        {this.props.isLoadingOnScroll && <LoaderComponent />}
      </section>
    );
  }
}

export default provideContext(AvengerCardComponent);
