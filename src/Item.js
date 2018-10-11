import React from 'react';

function keyValue(obj){
  const helpfulArray = [];
  for (let key in obj){
    helpfulArray.push(`${key}: ${obj[key]}`);
  }
  return helpfulArray;
}

export default function Item(props){
  return (
    <div className="item">
      <ul>
        {keyValue(props.content).map((e,i) => {
          return (
            <li key={i}>
              {e}
            </li>
          )
        })}
      </ul>
    </div>
  )
}