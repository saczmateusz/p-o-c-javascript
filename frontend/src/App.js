import React, { Component } from "react";
import "./style.css";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";

class App extends Component {
  render() {
    return (

      <div>
        <div class="alert alert-dismissible alert-primary">
          <p>Katalog samochodow firmowych</p>
        </div>
        <div class="formpage"><FormPage /></div>
        <div class="datapage"><HomePage /></div>
      </div>
    );
  }
}

export default App;