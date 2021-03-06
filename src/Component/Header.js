
import React from 'react'

import { headersData} from '../Data/header'
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  
} from "@material-ui/core"; 
import Avatar from '@material-ui/core/Avatar';


import { Link as RouterLink,useHistory} from 'react-router-dom'

const useStyles = makeStyles(() => ({
  header:{
    backgroundColor:"green",
     
  },
  button:{
    
    color:"white",  
   
  },
  logo:{
    color:"red",
  
  },
  avatar:{
      position:"fixed",
      top:0,
      right:0,
      scale:1.2,
      margin:"auto"
  }
}));



 function Header() {
  const { header,logo,avatar } = useStyles();
    let history = useHistory();
                     
  // function LoginOnClicked(){
  //   let history = useHistory();
  //   console.log("clicked") 
  //   history.push("/login")
  
  // }

const displayDesktop = () => {
    
  return (
    <Toolbar >
      {Mydata}
      {getMenuButtons()}
      <Button onClick={()=>history.push("/signup")}>

      <Avatar alt="Profile" src="../static/images/avatar/1.jpeg" className={avatar}/>
      </Button>
      <Button onClick={()=>history.push("/adminSignup")}>

    <Typography h1>Admin</Typography>
      </Button>
      
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


export default Header;
