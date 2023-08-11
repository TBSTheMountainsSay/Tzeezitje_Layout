import Header from './features/Header/Header';
import React from 'react';
import 'src/css/reset.scss';
import 'src/css/global.scss';
import './App.css';
import Menu from './features/Menu/Menu';
import Specification from './features/Specification/Specification';
import Examples from './features/Examples/Examples';
import Carousel from './features/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Specification />
      <Examples />
      <Carousel />
    </div>
  );
}

export default App;
