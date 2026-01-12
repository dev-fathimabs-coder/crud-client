// import { useState } from 'react'
// import './App.css'

import { useState } from "react";

function App() {

  let [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  })
  let { username, email, password } = data;

  function getValue(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  console.log(data);

  //PREVENT PAGE REFRESH

  let handleSubmit = async (e) => {
    e.preventDefault();




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
          <label htmlFor='username'>UserName</label>
          <input type="text" id='username' name='username'
            value={username} onChange={getValue} />
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name='email'
            value={email} onChange={getValue} />
          <label htmlFor='password'>Password</label>
          <input type="password" id='password' name='password'
            value={password} onChange={getValue} />

          <button className='signup'>Sign Up</button>
        </form>
      </div>
    </>
  )
}

export default App;



