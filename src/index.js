import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { getOS, getPatform } from 'react-navigator-user-agent';

import {
  BrowserRouter as Router
} from "react-router-dom";

const Loader = () => {
  
  return (
    <div className="Loading">
      <div>loading...</div>
    </div>
  );
}

function WebPatform() {
  // console.log(getPatform());

  switch (getPatform()) {
    case "Desktop":
      window.location.replace("https://www.blackboard-th.com");
      break;
    case "Mobile":
      return <App />
      break;
    case null:
      return <App />
      break;
    default: return <App />
      break
  }
}


ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <Router
    // forceRefresh={true}
    ><WebPatform />
    </Router>
  </Suspense>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
