import React from '../node_modules/react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./components/header-component";
import AvengerContext from "./context/avenger-context";
import AvengerProvider from "./components/avenger-provider-component";
import AvengerDisplayComponent from "./components/avenger-display-component";
import AvengerInfoComponent from './components/avenger-info-component';
import AvengerListView from "./components/avenger-list-view-component";
import AvengerCardView from "./components/avenger-card-component";


function App() {
  return (
    <section className="App">
      <HeaderComponent />
      <AvengerProvider>
        <AvengerContext.Consumer>
          {context => (
            <>
              <AvengerDisplayComponent
                render={() => {
                  if (context.view === "List View")
                    return (
                      <AvengerListView
                        avengerList={context.avengerData}
                        handleSelectedAvenger={context.handleSelectedAvenger}
                      />
                    );
                  else
                    return (
                      <AvengerCardView
                        avengerList={context.avengerData}
                        handleSelectedAvenger={context.handleSelectedAvenger}
                      />
                    );
                }}
              />
              <AvengerInfoComponent
                avengerList={context.avengerData}
                selectedAvenger={context.selectedAvenger}
              />
            </>
          )}
        </AvengerContext.Consumer>
      </AvengerProvider>
    </section>
  );
}

export default App;
