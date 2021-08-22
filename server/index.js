import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import bodyParser from 'body-parser'
import  dotenv from 'dotenv' 
import App from '../src/App'; 
import {router } from './router/index'
import mongoose from 'mongoose'
import {GlobalErrorController} from './controller/GlobalErrorController'

import  mongoSanitize from 'express-mongo-sanitize'
import  xss  from 'xss-clean';
  
dotenv.config({path:'./dotenv.env'})
const app = express();

process.on('uncaughtException',err => {
  console.log('Uncaught Exception occurs');
  console.log(err.message,err.name);
  process.exit(1);
})
const PORT = process.env.PORT || 3006;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({limit:'10kb'}));
app.use(bodyParser.json());
app.use(mongoSanitize());
app.use(xss()); 
const serverRenderer = (req, res) => {
    const app = ReactDOMServer.renderToString(<App />);
  
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
  
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      );
    });
  }
  
router.use('^/$', serverRenderer) 

  app.use(express.static('./build'));

  app.use(router)

  mongoose.connect('mongodb://localhost/fabDaiProject',{ useNewUrlParser: true,useUnifiedTopology: true  })
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`connected to port ${PORT}`)
    })
})
app.use(GlobalErrorController)
process.on('unhandledRejection',(err) => {
  console.log(err.name,err.message);
  process.exit(1); 
});
  