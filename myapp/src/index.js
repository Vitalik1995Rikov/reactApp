import React from 'react';
import ReactDOM from 'react-dom';

function SayHello() {
  return <h1>Hello world</h1>
}

ReactDOM.render(
    <SayHello/>,
  document.getElementById('root')
);
