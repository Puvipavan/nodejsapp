'use strict';

const express = require('express');
const PORT = process.env.PORT || 8000;

let app = express();

function getOutput(req){
    let output = '<table> <h3>Server Running Port :'+ PORT +'<br>';
    output = output + 'Current URL: '+ req.protocol + '://' + req.get('host') + req.originalUrl +'</h3>';
    output = output + '<h3>Environment Variables</h3><table>';
    for (let key in process.env){
        output = output +'<tr><td>' + key + '</td><td>' + process.env[key] + '</td></tr>';
    }
    output = output + '</table>';
    return output
}
app.get('/*', function(req, res){
    res.send(getOutput(req));
});

app.listen(PORT, function(err){
    if(err){
        console.log("Unable to listen on PORT "+ PORT);
        process.exit(-1);
    }
    console.log('Server Started on PORT :'+ PORT);
});