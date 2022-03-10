import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState(
    {
      name: 'Peter',
      age: 24,
      msg: 'random message'
    }
  )

  const [name, setName] = useState('Peter')
  const [age, setAge] = useState(24)
  const [msg, setMsg] = useState('Random Message')

  const changeMsg = () => {
    // setPerson({ ...person, msg: 'Hello World' })
    setMsg('Hello World')
  }

  return (
    <>
      <h3> {name}</h3>
      <h3> {age}</h3>
      <h3> {msg}</h3>
      <button className='btn' onClick={changeMsg}> Change Message</button>

    </>
  )

};

export default UseStateObject;
