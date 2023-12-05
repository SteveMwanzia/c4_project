import './App.css'
import HomePage from './Components/HomePage'
import PasswordRecovery from './Components/PasswordRecovery'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='signin' element={<SignIn/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='passwordrecovery' element={<PasswordRecovery/>}/>
    </Routes>
      {/* <HomePage /> */}
      {/* <SignIn /> */}
      {/* <SignUp/> */}
      {/* <PasswordRecovery /> */}

    </>
  )
}

export default App
