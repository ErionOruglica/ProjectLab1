import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const sql = require('mssql/msnodesqlv8');

var config = {

       server : "DESKTOP-OKEREVD",
      database: "Restauranti",
     options :{
       trustedConnection:true,
     },
    driver:"msnodesqlv8",
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


