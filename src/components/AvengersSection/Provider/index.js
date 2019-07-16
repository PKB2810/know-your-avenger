import React, { useState, useEffect } from 'react';
import AvengerContext from '../../../context/avenger-context';
import { API_KEY, API_URL } from '../../../constants';

function AvengerProvider(props) {
  const [view, setView] = useState('List View');
  const [selectedAvenger, setSelectedAvenger] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingOnScroll, setIsLoadingOnScroll] = useState(false);
  const [avengers, setAvengers] = useState([]);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);

  //this effect acts as componentDidMount
  useEffect(() => {
    fetchData()
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          if (result.code === 200) {
            setIsLoadingOnScroll(false);
            setAvengers(avengers => avengers.concat(result.data.results));
            setIsLoading(false);
            setOffset(offset => offset + result.data.limit);
          } else {
            setError(result.code + ':' + result.status);
          }
        },
        error => {
          throw new Error(error);
        }
      );
  }, []);
  //this effect fetches data only when isLoadingOnScroll=true
  useEffect(() => {
    if (isLoadingOnScroll)
      fetchData(offset)
        .then(res => res.json())
        .then(
          result => {
            if (result.code === 200) {
              setIsLoadingOnScroll(false);
              setAvengers(avengers => avengers.concat(result.data.results));
              setIsLoading(false);
              setOffset(offset => offset + result.data.limit);
            } else {
              setError(result.code + ':' + result.status);
            }
          },
          error => {
            setError(error);
          }
        );
  }, [isLoadingOnScroll]);

  function fetchData(offset = 0) {
    return fetch(API_URL + '?apikey=' + API_KEY + '&offset=' + offset);
  }

  function fetchDataOnScroll(e) {
    const elem = e.target;
    if (elem.scrollHeight - elem.scrollTop === elem.clientHeight) {
      setIsLoadingOnScroll(true);
    } else {
      return;
    }
  }

  function onViewChange(value) {
    setView(value);
  }

  function handleSelectedAvenger(avengerName) {
    setSelectedAvenger(avengerName);
  }

  if (error) {
    throw new Error(error);
  } else {
    return (
      <AvengerContext.Provider
        value={{
          view: view,
          selectedAvenger: selectedAvenger,
          avengerData: avengers,
          onViewChange: onViewChange,
          isLoading: isLoading,
          isLoadingOnScroll: isLoadingOnScroll,
          handleSelectedAvenger: handleSelectedAvenger,
          handleFetchOnScroll: fetchDataOnScroll
        }}>
        {props.children}
      </AvengerContext.Provider>
    );
  }
}

export default AvengerProvider;
