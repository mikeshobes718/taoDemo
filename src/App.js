import React from 'react';
import LoginForm from './LoginForm'; // Import the LoginForm component
import './App.css'; // This is where you'll write CSS for your app

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* You can add a header if you like */}
      </header>
      <main>
        <LoginForm /> {/* This renders the login form */}
      </main>
    </div>
  );
}

export default App;
