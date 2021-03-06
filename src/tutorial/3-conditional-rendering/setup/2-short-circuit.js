import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [isError, setIsError] = useState(false)

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || 'John Doe'}</h1>
      <button type='button' className='btn' onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Error..</h1>}
      {isError ? <h1>True</h1> : <h1>False</h1>}
    </>
  );
};

export default ShortCircuit;
