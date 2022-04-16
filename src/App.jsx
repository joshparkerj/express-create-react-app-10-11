import React, { useState } from 'react';
import { string } from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

import Form from './Form';
import Field from './Field';
import Save from './Save';
import Load from './Load';
import Item from './Item';

import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';

const App = function App({ rootUrl }) {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [stuff, setStuff] = useState([]);

  const handleLoad = async (target) => {
    try {
      const { data } = await axios.get(`${rootUrl}${target}`);
      if (Array.isArray(data)) {
        setStuff(data);
      } else {
        toast.warn('nothing loaded...');
      }
    } catch (e) {
      toast.error(e);
    }
  };

  return (
    <div className="App">
      <h1>Fab App</h1>
      <ToastContainer />
      <div className="various-forms">
        <Form name="color" onChange={({ target: { value } }) => setColor(value)} />
        <Form name="size" onChange={({ target: { value } }) => setSize(value)} />
        <Form name="price" onChange={({ target: { value } }) => setPrice(value)} />
        <Form name="brand" onChange={({ target: { value } }) => setBrand(value)} />
      </div>
      <Field text={color} />
      <Field text={size} />
      <Field text={price} />
      <Field text={brand} />
      <Save
        data={{
          color, size, price, brand,
        }}
        target={`${rootUrl}/`}
      />
      <Load target="/data" update={handleLoad} />
      {stuff.map(({ id, ...rest }) => (
        <Item key={id} content={rest} />
      ))}
    </div>
  );
};

App.propTypes = {
  rootUrl: string,
};

App.defaultProps = {
  rootUrl: 'http://localhost:8080',
};

export default App;
