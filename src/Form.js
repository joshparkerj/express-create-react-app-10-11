import React from 'react';

export default function Form(props){
  return (
    <div className="form">
      form
      <input name={props.name} onChange={props.onChange} />
    </div>
  )
}