import React, { Component } from 'react'
import axios from "axios";

export default class Carlist extends Component {
  constructor() {
    super();
    this.handleCarDelete = this.handleCarDelete.bind(this);
  }

  handleCarDelete(req) {
    let reg_no = req;
    console.log(req);
    axios.delete("http://localhost:8000/api/cars/" + reg_no).then(res => {
      console.log(reg_no);
      window.location.reload()
    });

  }
  render() {
    let data = this.props.cars;
    return (
      <div>
        {data ? (
            <table>
              <tr class="header">
                <td>Tablica</td>
                <td>Marka</td>
                <td>Model</td>
                <td>Rok</td>
                <td>Kolor</td>
                <td>Paliwo</td>
                <td>Usun</td>
              </tr>
              {data.map(car => (<tr class="data">
                <td>{car.reg_no}</td>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.color}</td>
                <td>{car.fuel}</td>
                <td><button class="btn my_btn my_button usun" onClick={() => this.handleCarDelete(car.reg_no)}/></td>
              </tr>))}

            </table>) : 'brak danych'}
      </div>
    )
  }
}
