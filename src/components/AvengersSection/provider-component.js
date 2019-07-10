import React from 'react';
import AvengerContext from '../../context/avenger-context';

class AvengerProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'List View',
      selectedAvenger: null,
      isLoading: true,
      isLoadingOnScroll: false,
      offset: 0,
      avengers: []
    };
  }
  componentDidMount() {
    fetch(
      'https://gateway.marvel.com:443/v1/public/characters?apikey=63ed80dab91bb44381fc80ef363acde5'
    )
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            avengers: result.data.results,
            isLoading: false,
            offset: this.state.offset + result.data.limit
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  fetchDataOnScroll = e => {
    const elem = e.target;
    if (elem.scrollHeight - elem.scrollTop === elem.clientHeight) {
      this.setState({ isLoadingOnScroll: true }, function() {
        fetch(
          'https://gateway.marvel.com:443/v1/public/characters?apikey=63ed80dab91bb44381fc80ef363acde5&offset=' +
            this.state.offset
        )
          .then(res => res.json())
          .then(
            result => {
              console.log(result);
              this.setState({
                avengers: this.state.avengers.concat(result.data.results),
                isLoadingOnScroll: false,
                offset: this.state.offset + result.data.limit
              });
            },
            error => {
              console.log(error);
            }
          );
      });
    } else {
      return;
    }
  };

  onViewChange = value => {
    this.setState({
      view: value
    });
  };

  handleSelectedAvenger = avengerName => {
    this.setState({ selectedAvenger: avengerName });
  };

  render() {
    return (
      <AvengerContext.Provider
        value={{
          view: this.state.view,
          selectedAvenger: this.state.selectedAvenger,
          avengerData: this.state.avengers,
          onViewChange: this.onViewChange,
          isLoading: this.state.isLoading,
          isLoadingOnScroll: this.state.isLoadingOnScroll,
          handleSelectedAvenger: this.handleSelectedAvenger,
          handleFetchOnScroll: this.fetchDataOnScroll
        }}>
        {this.props.children}
      </AvengerContext.Provider>
    );
  }
}

export default AvengerProvider;
