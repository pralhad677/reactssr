import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    makeStyles,
 
  } from "@material-ui/core"; 
  import {arr} from '../Data/Footer'
  import {Theme } from "@material-ui/core/styles"
  
import useMediaQuery from '@material-ui/core/useMediaQuery';
  const useStyles = makeStyles((theme) => ({
      footer:{
          position:'fixed',
          bottom:0,
          height:"25vh",
          backgroundColor:"green"
      },
      typography:{
        display:"flex",
        justifyContent:"spaceBetween"
      },
      listStyle:{
          listStyle:"none",
          color:"white"
      },
      word:{
          display:'relative',
          top:"20px"
      }
  }))
export default function Footer() {

    const {footer,typography,listStyle,word} = useStyles()
    
    return (
        <AppBar position="static" color="primary" className={footer}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit" className={typography} >
                  <div style={{marginRight:"45px"}}>

               {arr.slice(0,3).map((item,i)=>{
                return <li key={i} className={listStyle}>{item}</li>  
            })}
            </div >
                  <div style={{marginRight:"45px"}}>

               {arr.slice(3,6).map((item,i)=>{
                return <li key={i} className={listStyle}>{item}</li>  
            })}
            </div>
                  <div style={{marginRight:"45px"}}>

               {arr.slice(6).map((item,i)=>{
                return <li key={i} className={listStyle}>{item}</li>  
            })}
            </div>
            
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}