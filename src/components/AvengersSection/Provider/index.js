import React from 'react';
import AvengerContext from '../../../context/avenger-context';
import { API_KEY, API_URL } from '../../../constants';

class AvengerProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'List View',
      selectedAvenger: null,
      isLoading: true,
      isLoadingOnScroll: false,
      offset: 0,
      avengers: [],
      error: null
    };
  }
  componentDidMount() {
    this.fetchData()
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          if (result.code === 200) {
            // throw new Error(result.code + ':'+ result.status );

            this.setState({
              isLoadingOnScroll: false,
              avengers: this.state.avengers.concat(result.data.results),
              isLoading: false,
              offset: this.state.offset + result.data.limit
            });
          } else {
            this.setState({ error: result.code + ':' + result.status });
          }
        },
        error => {
          throw new Error(error);
        }
      );
  }

  fetchData(offset = 0) {
    return fetch(API_URL + '?apikey=' + API_KEY + '&offset=' + offset);
  }

  fetchDataOnScroll = e => {
    const elem = e.target;
    if (elem.scrollHeight - elem.scrollTop === elem.clientHeight) {
      this.setState({ isLoadingOnScroll: true }, () => {
        this.fetchData(this.state.offset)
          .then(res => res.json())
          .then(
            result => {
              if (result.code === 200) {
                this.setState({
                  isLoadingOnScroll: false,
                  avengers: this.state.avengers.concat(result.data.results),
                  isLoading: false,
                  offset: this.state.offset + result.data.limit
                });
              } else {
                this.setState({ error: result.code + ':' + result.status });
              }
            },
            error => {
              this.setState({ error: error });
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
    if (this.state.error) {
      throw new Error(this.state.error);
    } else {
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
}

export default AvengerProvider;
