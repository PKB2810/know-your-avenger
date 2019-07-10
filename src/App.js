import React from 'react';
import './App.css';
import HeaderComponent from './components/Header/header-component';
import AvengerContext from './context/avenger-context';
import AvengerProvider from './components/AvengersSection/provider-component';
import AvengerDisplayComponent from './components/AvengersSection/display-component';
import AvengerInfoComponent from './components/AvengersSection/info-component';
import AvengerListView from './components/ListView/list-view-component';
import AvengerCardView from './components/CardView/card-view-component';
import LoaderComponent from './components/Loader/loader-component';

function App() {
  return (
    <section className="App">
      <HeaderComponent />
      <AvengerProvider>
        <AvengerContext.Consumer>
          {context => (
            <>
              {context.isLoading === false && (
                <AvengerDisplayComponent
                  render={() => {
                    if (context.view === 'List View')
                      return (
                        <AvengerListView
                          avengerList={context.avengerData}
                          selectedAvenger={context.selectedAvenger}
                          handleSelectedAvenger={context.handleSelectedAvenger}
                          handleFetchOnScroll={context.handleFetchOnScroll}
                          isLoadingOnScroll={context.isLoadingOnScroll}
                        />
                      );
                    else
                      return (
                        <AvengerCardView
                          avengerList={context.avengerData}
                          selectedAvenger={context.selectedAvenger}
                          handleSelectedAvenger={context.handleSelectedAvenger}
                          handleFetchOnScroll={context.handleFetchOnScroll}
                          isLoadingOnScroll={context.isLoadingOnScroll}
                        />
                      );
                  }}
                />
              )}
              {context.isLoading === false && (
                <AvengerInfoComponent
                  avengerList={context.avengerData}
                  selectedAvenger={context.selectedAvenger}
                />
              )}
              {context.isLoading && <LoaderComponent />}
            </>
          )}
        </AvengerContext.Consumer>
      </AvengerProvider>
    </section>
  );
}

export default App;
