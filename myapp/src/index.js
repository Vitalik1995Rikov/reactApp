import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

const Collapse = () => {
  const [isOpen, setOpen] = React.useState(true);

  const onClickHandle = function () {
    setOpen(isOpen => !isOpen)
  }

  return (
    <div>
      <button>
      </button>
    </div>
  )

ReactDOM.render(
    <div>
      <h2>Нажмите на строки</h2>
      <Title text="Строка #1"/>
      <Title text="Строка #2"/>
      <Title text="Строка #3"/>
    </div>,
  document.getElementById('root')
);
