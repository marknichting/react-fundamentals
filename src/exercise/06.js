// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  const refObject = React.useRef();

  const [input, changeInput] = React.useState('');
  //state to keep track of if they have a capital letter error
  // const [isError, toggleError] = React.useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.dir()
    // const value = e.target.elements[0].value;
    onSubmitUsername(refObject.current.value);
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    
    changeInput(value.toLowerCase());


    //for sending an error when they type a capital letter
    // if (value !== value.toLowerCase()) {
    //   toggleError(true);
    // } else {
    //   toggleError(false);
    // }
  }

  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor='input'>Username:</label>
        <input id="input" type="text" ref={refObject} onChange={handleChange } value={input} />
        <button type="submit" >Submit</button>
      </div>
    </form>
  )
}
// {isError && <div role="alert" style={{backgroundColor: 'red'}}>Username must be lower case</div>}
{/* <button type="submit" disabled={isError}>Submit</button> */}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
 