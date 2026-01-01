import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
       <form action="">
        UserName
        <input type="text" name='username' />
        Email
        <input type="email" name='email' />
        Password
        <input type="password"  name='password'/>
        <button onClick={{}}>Sign Up / Login</button>
      </form>
     </div>
    </>
  )
}

export default App
