import React from 'react';
import ReactDOM from 'react-dom';

const text = 'Clean project'

const elem = (
  <div>
    <h2>{text}</h2>
    <input type="text"/>
    <button>Click</button>
  </div>
);

ReactDOM.render(
    elem,
  document.getElementById('root')
);