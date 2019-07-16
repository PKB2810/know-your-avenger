import React from 'react';
import './App.css';
import HeaderComponent from './components/Header';
import AvengerProvider from './components/AvengersSection/Provider';
import MainComponent from './components/Main';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <section className="App">
      <HeaderComponent />
      <ErrorBoundary>
        <AvengerProvider>
          <MainComponent />
        </AvengerProvider>
      </ErrorBoundary>
    </section>
  );
}

export default App;
