import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test pipeline!
        </a>
		<br></br>
		<form method="POST" action="http://uplan-monolith-dev.us-east-2.elasticbeanstalk.com/api/v1/auth/singin">
		email: <input type="text" name="email"></input><br></br>
		password: <input type="password" name="password"></input><br></br>
		<input type="submit" value="submit"></input>
		</form>
      </header>
    </div>
  );
}

export default App;
