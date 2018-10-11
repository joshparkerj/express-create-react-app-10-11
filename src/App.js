import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Field from './Field';
import Save from './Save';
import Load from './Load';
import Item from './Item';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      color: '',
      size: '',
      price: '',
      brand: '',
      stuff: []
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoad = (f,t) => {
    f(t)
    .then(res => res.json())
    .then(res => {
      if (Array.isArray(res)){
        this.setState({stuff: res})
      }else{
        toast.warn('nothing loaded...');
      }
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <ToastContainer />
        <div className="various-forms">
          <Form name="color" onChange={this.handleChange} />
          <Form name="size" onChange={this.handleChange} />
          <Form name="price" onChange={this.handleChange} />
          <Form name="brand" onChange={this.handleChange} />
        </div>
        <Field text={this.state.color} />
        <Field text={this.state.size} />
        <Field text={this.state.price} />
        <Field text={this.state.brand} />
        <Save data={this.state} target="/" />
        <Load target="/data" update={this.handleLoad}/>
        {this.state.stuff.map((e,i) => {
          return (
            <Item key={i} content={e} />
          )
        })}
      </div>
    );
  }
}

export default App;
