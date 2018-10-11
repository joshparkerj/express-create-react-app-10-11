import React from 'react';

function postTarget(data,target){
  console.log(data);
  const j_data = JSON.stringify(data);
  console.log(j_data);
  return fetch(target, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: j_data
  })
  .then(res => console.log(res))
  .catch(err => console.error(err));
}

export default function Save(props){
  return (
    <div className="save">
      <button onClick={() => postTarget(props.data,props.target)}>
        save
      </button>
    </div>
  )
}