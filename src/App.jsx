import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Form from './Form';
import Field from './Field';
import Save from './Save';
import Load from './Load';
import Item from './Item';

import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';

const App = function App() {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [stuff, setStuff] = useState([]);

  const handleLoad = (f, t) => {
    f(t)
      .then((res) => res.json())
      .then((res) => {
        if (Array.isArray(res)) {
          setStuff(res);
        } else {
          toast.warn('nothing loaded...');
        }
      });
  };

  return (
    <div className="App">
      <h1>Fab App</h1>
      <ToastContainer />
      <div className="various-forms">
        <Form name="color" onChange={({ target }) => setColor(target.value)} />
        <Form name="size" onChange={({ target }) => setSize(target.value)} />
        <Form name="price" onChange={({ target }) => setPrice(target.value)} />
        <Form name="brand" onChange={({ target }) => setBrand(target.value)} />
      </div>
      <Field text={color} />
      <Field text={size} />
      <Field text={price} />
      <Field text={brand} />
      <Save
        data={{
          color, size, price, brand, stuff,
        }}
        target="/"
      />
      <Load target="/data" update={handleLoad} />
      {stuff.map((e) => (
        <Item key={e} content={e} />
      ))}
    </div>
  );
};

export default App;
