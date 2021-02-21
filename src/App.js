import React, { useState, createContext, useReducer } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../src/Pages/Home';
import Destination from '../src/Pages/Destination';
import SinglePipeline from '../src/Pages/SinglePipeline';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/destination" component={Destination} exact />
        <Route path="/single_pipeline/:id" component={SinglePipeline} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
