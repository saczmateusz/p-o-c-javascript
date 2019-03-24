import React, { Component } from "react";
import axios from "axios";

export default class FormPage extends Component {
  constructor() {
    super();

    this.state = {
      reg_no: "",
      brand: "",
      model: "",
      year: "",
      color: "",
      fuel: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  resetForm() {
    this.setState({
      reg_no: "",
      brand: "",
      model: "",
      year: "",
      color: "",
      fuel: ""
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let object = {
      reg_no: this.state.reg_no,
      brand: this.state.brand,
      model: this.state.model,
      year: this.state.year,
      color: this.state.color,
      fuel: this.state.fuel
    };

    if (object.reg_no == null || object.brand == '' || object.model == '' || object.year == '' || object.color == '' || object.fuel == '') {
      this.state.reg_no = "UZUPEŁNIJ DANE";
    }
    else {
      if (object.year > 2019) object.year = 2019;
      if (object.year < 1900) object.year = 1900;
      axios.post("http://localhost:8000/api/cars", object).then(res => {
        console.log(object);
        window.location.reload()
      });

    }



  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    let brands = [
      "",
      "Alfa Romeo",
      "Audi",
      "BMW",
      "Citroen",
      "Fiat",
      "Ford",
      "Hyundai",
      "Honda",
      "Kia",
      "Lexus",
      "Maserati",
      "Mercedes",
      "Opel",
      "Porsche",
      "Seat",
      "Skoda",
      "Subaru",
      "Toyota",
      "Volkswagen",
      "Volvo"
    ];
    let colors = [
      "",
      "bialy",
      "czarny",
      "srebrny",
      "szary",
      "niebieski",
      "czerwony szybszy",
      "zolty",
      "zielony"
    ];
    let fuelTypes = [
      "",
      "benzyna",
      "diesel",
      "LPG",
      "prad",
      "wodor",
      "kasztelan niepasteryzowane"
    ];

    return (
      <div>
        <table>
          <tr class="header-form">
            <td class="header-form">Formularz</td>
          </tr>
        </table>
        <form onSubmit={this.handleSubmit} id="form1">
          <div class="form-group">
            <label for="reg_no">Tablica rejestracyjna: </label>
            <input
              value={this.state.reg_no}
              onChange={this.handleChange}
              class="form-control"
              name="reg_no"
              placeholder="Tablica rejestracyjna"
            />
          </div>
          <div class="form-group">
            <label for="brand">Podaj markę samochodu</label>
            <select
              class="form-control"
              name="brand"
              value={this.state.brand}
              onChange={this.handleChange}
            >
              {brands.map(brand => (
                <option value={brand}>{brand}</option>
              ))}
            </select>
          </div>
          <div class="form-group">
            <label for="model">Model samochodu: </label>
            <input
              value={this.state.model}
              onChange={this.handleChange}
              class="form-control"
              name="model"
              placeholder="Model"
            />
          </div>
          <div class="form-group">
            <label for="year">Rocznik samochodu: </label>
            <input
              value={this.state.year}
              onChange={this.handleChange}
              class="form-control"
              name="year"
              min="1950"
              max="2019"
              placeholder="Rok"
            />
          </div>
          <div class="form-group">
            <label for="color">Podaj kolor samochodu</label>
            <select
              class="form-control"
              name="color"
              value={this.state.color}
              onChange={this.handleChange}
            >
              {colors.map(color => (
                <option value={color}>{color}</option>
              ))}
            </select>
          </div>
          <div class="form-group">
            <label for="fuel">Podaj paliwo samochodu</label>
            <select
              class="form-control"
              name="fuel"
              value={this.state.fuel}
              onChange={this.handleChange}
            >
              {fuelTypes.map(fuel => (
                <option value={fuel}>{fuel}</option>
              ))}
            </select>
          </div>
          <div>
            <button type="button" class="btn my_btn my_button" id="clearForm" onClick={() => this.resetForm()}>
              Wyczysc formularz
            </button>
            <button type="submit" class="btn my_button" id="sendForm">
              Wyslij formularz
            </button>
          </div>
        </form>
      </div>
    );
  }
}
