import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import bodyParser from 'body-parser'
import  dotenv from 'dotenv' 
import App from '../src/App'; 
import {router } from './router/index'
 
dotenv.config({path:'./dotenv.env'})
const PORT = process.env.PORT || 3006;
const app = express();

app.use(bodyParser.json({limit:'10kb'}));

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

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });