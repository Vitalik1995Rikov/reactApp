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
        {isOpen ? 'Скрыть' : 'Показать'}
      </button>
      <div className={"content"}>

      </div>
    </div>
  )
}

ReactDOM.render(
    <Collapse/>,
  document.getElementById('root')
);