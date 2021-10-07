import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom';

const testContext = createContext()

const ComponentC = (props) => {
  const context = useContext(testContext)
  const styles = {color: context.color}

  return (
    <p style={styles}>ComponentC</p>
  )
}

const ComponentB = () => {
  return (
    <div>
      <p>ComponentB</p>
      <ComponentC/>
    </div>
  )
}

const {Provider} = testContext

const ComponentA = () => {
  const color = "#31c5b2"
  const contextValue = {color}

  return (
    <Provider value={contextValue}>
    <div>
      <p>ComponentA</p>
      <ComponentB/>
    </div>
    </Provider>
  )
}



ReactDOM.render(
    <ComponentA/>,
  document.getElementById('root')
);