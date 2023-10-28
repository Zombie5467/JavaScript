import React, { useState } from 'react';
import propsTypes from 'prop-types';

const GreetingFunction = (props) => {
  // breve introducción a useState
  // const [variable, método] = useState(valor inicial)
    const [age, setage] = useState(29);
    
    const birthday = () => {
        setage(age + 1);
    }

     const menos = () => {
       setage(age - 1);
     };

  return (
    <div>
      <h1>
        Hello {props.name} y bienvenido a React con componentes funcionales
      </h1>
      <h2>tu edad es {age}</h2>
        <div>
          <button onClick={menos}> Menos 1</button>
          <button onClick={birthday}> Mas 1</button>
        </div>
    </div>
  );
}

GreetingFunction.propsTypes = {
    name: propsTypes.string,
};
export default GreetingFunction;
