
import React from 'react'
import About from './Component/About'
import Contact from './Component/Contact'
import Blog from './Component/Blog'
import Home from './Component/Home'
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { headersData} from './Data/header'
import ErrorBoundary from './ErrorBoundary'
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  
} from "@material-ui/core";
import { Switch, Route,NavLink,Link as RouterLink} from 'react-router-dom'

const useStyles = makeStyles(() => ({
  header:{
    backgroundColor:"blue",
    
  },
  button:{
    
    color:"white",
   
  },
  logo:{
    color:"red",
  
  },
 
}));

 function App() {
  const { header,logo } = useStyles();
                     
  

const displayDesktop = () => {
  return (
    <Toolbar >
      {Mydata}
      {getMenuButtons()}
    </Toolbar>
  );
};
                   
const Mydata = (
  <Typography variant="h6" component="h1" className={logo}>
    Scholor Space
  </Typography>
);
                   
const getMenuButtons = () => {
  return headersData.map(({ label, href }) => {
    return (
      <Button
      
        {...{
          key: label,
          color: "red",
          to: href,
          component: RouterLink,
          
        }}
       style={{
    
        color:"white",
        marginLeft:"70px"
      }}
      >
        {label}
      </Button>
    );
  });
};


  return (
    <div >
      
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
      
    </div> 
  );
}

export default function appWithErrorBoundary(props){
  return (
    <ErrorBoundary>
        <App {...props}/>
    </ErrorBoundary>
  
  )
}

// export default App;
