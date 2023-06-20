import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FirstScreen from './Header';
import SecondScreen from './SecondScreen';

function App() {
  return (
    <Router>
      <Route exact path="/" component={FirstScreen} />
      <Route path="/second-screen/:stringValue" component={SecondScreen} />
    </Router>
  );
}

export default App;
