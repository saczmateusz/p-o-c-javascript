import React, { Component } from 'react'
import Carlist from '../../components/carlist';
import axios from 'axios';

export default class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      cars: []
    }

    axios.get("http://localhost:8000/api/cars").then(res => {
      this.setState({
        cars: res.data.data
      });
    });
  }

  render() {
    return (
      <div>
        <Carlist cars={this.state.cars} />
      </div>
    )
  }
}
