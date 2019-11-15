import React from 'react';
import './App.css';
import HeaderComponent from './Component/HeaderComponent';
import SlideShow from './Component/SliderComponent';
import MainComponent from './Component/MainComponent';
import FooterComponent from './Component/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <SlideShow/>
      <MainComponent />
      <FooterComponent/>
    </div>
  );
}

export default App;
