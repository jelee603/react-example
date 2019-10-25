import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function App() {
  return (
      <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/message">Message</Link>
        </li>
      </ul>
      </div>
  );
}
export default App;
