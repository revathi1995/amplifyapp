import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

import CameraFaceDetect from './views/cameraFaceDetect';

import Header from './components/Header';
import './App.css';

const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div className="route">
            <Header />
            <Route exact path="/camera" component={CameraFaceDetect} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
