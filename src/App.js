
import React from 'react'

import ErrorBoundary from './ErrorBoundary'

import About from './Component/About'
import Home from './Component/Home'
import Blog from './Component/Blog'
import Contact from './Component/Contact'
import Login from './Component/Login'
import {Switch,Route} from 'react-router-dom'
function App(){
  return (
    <div>
      
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/blog"><Blog /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="*"><h1>page not found</h1></Route>
      </Switch>
    </div>
  ) 
}
export default function appWithErrorBoundary(props){
  return (
    <ErrorBoundary>
        <App {...props}/>
    </ErrorBoundary>
  
  )
}

// export default App;
