import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const initialState = {
  login: "",
  password: ""
}

function reducer (state, action) {
  switch (action.type) {
    case 'set-field-value':
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }

      default:
      throw new Error("Unknown action")
  }
}

const Form = () => {
  const [fields, dispatch] = useReducer(reducer, initialState)

  const onSubmitHandle = event => {
    
    event.preventDefault()

    console.log(fields)
  }

const onSetLogin = event => {
  dispatch({
    type: "set-field-value",
    payload: {
      name: "login",
      value: event.target.value
    }
  })
}

const onSetPassword = event => {
  dispatch({
    type: "set-field-value",
    payload: {
      name: "password",
      value: event.target.value
    }
  })
}

return (
  <form onSubmit={onSubmitHandle} >
    <input 
      value={fields.login} 
      onChange={onSetLogin} 
      type="text" 
      placeholder="Введите логин"
    />
    <input 
      value={fields.password} 
      onChange={onSetPassword}
      type="password" 
      placeholder="Введите пароль" 
    />
    <button>Войти</button>
  </form>
)
}

ReactDOM.render(
    <Form/>,
  document.getElementById('root')
);