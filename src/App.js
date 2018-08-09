import React, { Component, Fragment } from 'react';
import classes from "./App.css";
import Layout from "./containers/Layout/Layout";
import ShowWeather from './containers/ShowWeather/ShowWeather';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <ShowWeather />
        </Layout>
      </div>
    );
  }
}

export default App;
