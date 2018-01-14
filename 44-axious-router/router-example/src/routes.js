import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import App from './App';
import About from './About';
import Contact from './Contact';
import Params from './Params';
import Page404 from './Page404';

const routes = (<BrowserRouter>
  <div>
      <ul>
        <li><Link to="/">App</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact12345">Contact</Link></li>
        <li><Link to="/test/myparam">Test with params</Link></li>
      </ul>

      <hr/>
      <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/contact*" component={Contact}/>
        <Route path="/test/:foo" component={Params}/>
        <Route component={Page404}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default routes
