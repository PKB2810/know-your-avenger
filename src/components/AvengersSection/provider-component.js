import React from 'react';
import AvengerContext from '../../context/avenger-context';
import { API_URL } from '../../constants/api-url';
import { API_KEY } from '../../constants/api-public-key';

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
    this.fetchData();
  }

  fetchData(offset = 0, isLoading = false, isLoadingOnScroll = false) {
    fetch(API_URL + '?apikey=' + API_KEY + '&offset=' + offset)
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoadingOnScroll: isLoadingOnScroll,
            avengers: this.state.avengers.concat(result.data.results),
            isLoading: isLoading,
            offset: offset + result.data.limit
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
      this.setState({ isLoadingOnScroll: true }, () => {
        this.fetchData(this.state.offset);
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
