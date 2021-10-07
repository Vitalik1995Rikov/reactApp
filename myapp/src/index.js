import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

const Collapse = () => {
  const [isOpen, setOpen] = React.useState(true);

  const onClickHandle = function () {
    setOpen(isOpen => !isOpen)
  }

  return (
    <div className="collapse">
      <button onClick={onClickHandle}>
        {isOpen ? "Скрыть" : "Показать"}
      </button>
      <div className={"content " + (isOpen ? "open" : "close")}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </div>
    </div>
  )
}

ReactDOM.render(
    <Collapse/>,
  document.getElementById('root')
);