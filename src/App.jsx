import { useState } from 'react'
import './App.css'

function App() {

  let [username, setUserNAme] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  //PREVENT PAGE REFRESH

  let handleSubmit = async (e) => {
    e.preventDefault();

    let data = { username, email, password }
    console.log(data);
    

    fetch("http://localhost:5000/users", {
      method: 'POST',
      body: JSON.stringify(data)

    }).then(res => {
      res.json()
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input type="text"
          value={username}
          onChange={(e) => { setUserNAme(e.target.value) }} />
        <label>Email</label>
        <input type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }} />
        <label>Password</label>
        <input type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value) }} />

        <button>Sign Up</button>
      </form>
    </div>
  </>
)
}

export default App;
