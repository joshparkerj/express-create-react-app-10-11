import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Field from './Field';

class App extends Component {
  constructor(){
    super();
    this.state = {
      color: '',
      size: '',
      price: '',
      brand: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Form name="color" onChange={this.handleChange} />
        <Form name="size" onChange={this.handleChange} />
        <Form name="price" onChange={this.handleChange} />
        <Form name="brand" onChange={this.handleChange} />
        <Field text={this.state.color} />
        <Field text={this.state.size} />
        <Field text={this.state.price} />
        <Field text={this.state.brand} />
      </div>
    );
  }
}

export default App;
