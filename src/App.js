import React from 'react';
import './App.css';
import HeaderComponent from './components/Header/header-component';
import AvengerProvider from './components/AvengersSection/provider-component';
import MainComponent from './components/Main/main-component';

function App() {
  return (
    <section className="App">
      <HeaderComponent />
      <AvengerProvider>
        <MainComponent />
      </AvengerProvider>
    </section>
  );
}

export default App;
