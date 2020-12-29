const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions = {
    origin: 'http://localhost:4000',
    optionsSuccessStatus: 200
}

app.get('/userinfo/ms', cors(corsOptions), function (req, res) {
    console.log('Connect MSSQL');
    const mssql = require("mssql");
    // config for your database
    const configMSSQL = {
        user: '',
        password: '',
        server: '',
        //port: ,
        database: '',
        "options": {
            "encrypt": true,
            "enableArithAbort": true
        }
    }
    const queryMSSQL = 
    'SELECT A.USERID, A.USERNM, B.SAUPNO, B.CUSTNM '+
    'FROM HMUSRP A '+
    'LEFT OUTER JOIN NKCSTP B ON B.CUSTCD = A.CUSTCD';
    mssql.connect(configMSSQL, function (err) {
        if (err) console.log(err);
        let request = new mssql.Request();
        request.query(queryMSSQL, function (err, recordset) {
            if (err) console.log(err)
            console.log(recordset.length);
            res.send(recordset);
        });
    });
});

app.get('/userinfo/my', cors(corsOptions), function (req, res) {
    console.log('Connect MYSQL');
    const mysql = require("mysql");
    const configMYSQL = {
        user: '',
        password: '',
        host: '',
        port: '',
        database: '',
        "options": {
            "encrypt": true,
            "enableArithAbort": true
        }
    }
    const queryMYSQL = 
    'SELECT USERID, USERNM, SAUPNO, CUSTNM '+
    'FROM USRMST';
    
    const connection = mysql.createConnection(configMYSQL);
    
    connection.query(queryMYSQL, (err, data) => {
        if(err) console.log(err);
        console.log(data.length);
        res.send({recordset:data});
    });
});

app.listen(4000, () => {
    console.log('Server is running..');
});