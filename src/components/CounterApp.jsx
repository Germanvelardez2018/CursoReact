import { useState ,useEffect } from 'react';
import PropTypes from 'prop-types'





export const CounterApp = ({value}) => {
  
    const [counter,setCounter] = useState(value);

    const eventAdd = ()=>{
        setCounter(counter + 1);
    }

    const eventSub = ()=>{
      if(counter > 0 ) setCounter(counter - 1);
  }

  const eventReset = ()=>{
    setCounter(value);
}


     // Similar a componentDidMount y componentDidUpdate:
  useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    document.title = `You clicked ${counter} times`;
  });

    return (
    <>
      <h1>Counter App </h1>
      <h2> {counter} </h2>
      <button onClick= {eventAdd} >+1</button>
      <button onClick= {eventSub} > -1</button>
      <button onClick= {eventReset}> reset</button>
    </>
    
    )
  }
  
  
  
  CounterApp.propTypes ={
    value:PropTypes.number.isRequired
  }
  
  
  CounterApp.defaultProps ={
    value: 22
  }