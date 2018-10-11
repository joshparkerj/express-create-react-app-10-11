import React from 'react';

function loadStuff(target){
  return fetch(target);
}

export default function Load(props){
  return (
    <div className="load">
      <button onClick={() => props.update(loadStuff,props.target)}>
        load
      </button>
    </div>
  )
}