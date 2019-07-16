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
    const callFetchData = async() => {
      fetchData();
    }
    callFetchData();
  }, []);
  //this effect fetches data only when isLoadingOnScroll=true
  useEffect(() => {
    const callFetchDataOnScroll = async() => {
      if (isLoadingOnScroll){
         fetchData(offset);
      }
    }
    callFetchDataOnScroll();
    
  }, [isLoadingOnScroll, offset]);

  async function fetchData(offset = 0) {
    try {
      const response = await fetch(
        API_URL + '?apikey=' + API_KEY + '&offset=' + offset
      );
      const jsonResponse = await response.json();
      const result = await jsonResponse;
      if (result.code === 200) {
          setData(result);
         } else {
           setError(result.code + ':' + result.status);
         }  
    } catch (error) {
      setError(error);
    }
  }

  function setData(result){

    setIsLoadingOnScroll(false);
    setAvengers(avengers => avengers.concat(result.data.results));
    setIsLoading(false);
    setOffset(offset => offset + result.data.limit);
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
