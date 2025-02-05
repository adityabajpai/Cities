import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import LoadComponent from './Component/LoadComponent';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
            <LoadComponent />
        </div >
      </BrowserRouter>
    </Provider>
  );
}

export default App;
