
import './App.css';
import {getAuth} from 'firebase/auth';
import app from './firebase/firebase.init';

const auth = getAuth(app);
const handleRegister = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value 
  console.log(email, password);
}

const handleEmailBlur = event => {
  console.log(event.target.value);
}
const handlePasswordChange = event => {
  console.log(event.target.value);
}

function App() {
  return (
    <div className="App">
      <h3>From</h3>
      <form onSubmit={handleRegister}>
        <input onBlur={handleEmailBlur} type='email' name='email' placeholder='Enter your Emain'></input>
        <br />
        <input onChange={handlePasswordChange} type="password" name="password" id=""  placeholder='Enter your pasword'/>
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}

export default App;
