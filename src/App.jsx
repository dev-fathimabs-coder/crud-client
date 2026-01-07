import { useState } from 'react'
import './App.css'

function App() {

  let [username, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  //PREVENT PAGE REFRESH

  let handleSubmit = async (e) => {
    e.preventDefault();

    let data = { username, email, password }



    fetch("http://localhost:5000/users", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)

    }).then(res => {
      return res.json()
    })
      .then((result) => {
        console.log("Response from server:", result);
      })
      .catch((error) => {
        console.log("Error:", error);
      })
  }

  return (
    <>
      <div className='signup-form'>
        <form onSubmit={handleSubmit}>
          <label for='username'>UserName</label>
          <input type="text" id='username' name='username'
            value={username}
            onChange={(e) => { setUserName(e.target.value) }} />
          <label for="email">Email</label>
          <input type="email" id='email' name='email'
            value={email}
            onChange={(e) => { setEmail(e.target.value) }} />
          <label for='password'>Password</label>
          <input type="password" id='password' name='password'
            value={password}
            onChange={(e) => { setPassword(e.target.value) }} />

          <button className='signup'>Sign Up</button>
        </form>
      </div>
    </>
  )
}

export default App;
