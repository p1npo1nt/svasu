import { Router, Route } from 'svelte-routing';
import Home from './components/Home.svelte';
import MyWork from 'MyWork.svelte';
import Contact from './components/Contact.svelte';
import React from 'react';

export default (
  <Router>
    <Route path="/" component={Home} />
    <Route path="/mywork" component={MyWork} />
    <Route path="/contact" component={Contact} />
  </Router>
);
