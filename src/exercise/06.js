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

  function handleSubmit(event) {
    event.preventDefault()

    let username = event.target.elements.usernameInput.value
    username = usernameElement.current.value // Extra Credit
    onSubmitUsername(username)
  }

  function handleChange(event) { //Extra Credit 2
    const currentValue = event.target.value
    const isValid = currentValue === currentValue.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  function handleSubmit2(event) {
    event.preventDefault()

    onSubmitUsername(username)
  }

  function handleChange2(event) { //Extra Credit 3
    const currentValue = event.target.value
    setUsername(currentValue.toLowerCase())
  }

  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const usernameElement = React.useRef(null)
  const [error, setError] = React.useState(null)
  // eslint-disable-next-line
  const extraCreditOneAndTwo = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" ref={usernameElement} onChange={handleChange} />
      </div>
      <button type="submit" disabled={!!error}>Submit</button>
      {error && <div role="alert" style={{backgroundColor: 'maroon', color: '#f2f2f2', fontStyle: 'italic', padding: '2em'}}>{error}</div>}
    </form>
  )


  const [username, setUsername] = React.useState('')
  const extraCreditThree = (
    <form onSubmit={handleSubmit2}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange2} value={username} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )

  return extraCreditThree
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
