import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar'
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';



const App: React.FunctionComponent = () => {




  return (
    <>
      <BrowserRouter >
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact={true} path="/" component={TodosPage} />
            <Route exact={true} path="/info" component={AboutPage} />
          </Switch>
        </div>
      </ BrowserRouter >
    </>

  );
}

export default App;
