import { useState } from 'react'
import './App.css'

function App() {
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = { 'lastname': lastname, 'firstname': firstname, 'email': email }
    

    const url='http://127.0.0.1:8000'

    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(message)
    }).then(res=>console.log(message)).catch(error=>{console.log(error)})
  }


  return (
    <>
      
      <div>
        <ul>
          <li id='home'>HOME</li>
          <li id='about'>ABOUT</li>
          <li id='contact'>CONTACT</li>
        </ul>
      </div>

      <div>
        <h1>Please enter your details</h1>
      </div>
    
      <form id='detailsForm' onSubmit={handleSubmit}>
        <label id='lastnameLabel' className='label'>LASTNAME:<br></br>
          <input type='text' required id='lastnameInput' className='input'
            value={lastname} onChange={(e) => setLastname(e.target.value)}></input>
        </label>

        <br></br><br></br>

        <label id='firstnameLabel' className='label'>FIRSTNAME:<br></br>
          <input type='text' required id='firstnameInput' className='input'
            value={firstname} onChange={(e) => setFirstname(e.target.value)}></input>
        </label>

        <br></br><br></br>

        <label id='emailLabel' className='label'>EMAIL:<br></br>
          <input type='email' required id='emailInput' className='input'
            value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </label>

        <br></br>

        <button id='submitbutton' className='button'>SUBMIT</button>
      </form>
    </>
  )
}

export default App
