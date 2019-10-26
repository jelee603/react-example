import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function App() {
  return (
      <div>
      <h5>Class Component</h5>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/message">Message</Link>
        </li>
      </ul>
      <h5>Functional Component</h5>
      <ul>
        <li><Link to="/class_home">Home</Link></li>
        <li><Link to="/class_message">Message</Link></li>
      </ul>
      </div>
  );
}
export default App;
