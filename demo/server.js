
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var session = require("cookie-session");
var bodyParser = require("body-parser");
var q = require("q");    
var formidable = require("formidable");
var del = require("del");
var debug = require("debug");
var mongoose = require("mongoose");
var passport = require("passport");
var compression = require("compression");
var imagemagick = require("imagemagick");
var multer = require("multer");
var underscore = require("underscore");
var cors = require("cors");
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

var jwtSecret = 'fdfs897fsd213/mfñda3dd';

var port = 3000;
var app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
//app.use(cors());
app.use(cookieParser());
app.use(compression());

mongoose.connect("mongodb://localhost/dbpau",function(error){
    console.log("No se puede conectar con mongodb en localhost");
});

app.use("/assets", express.static(__dirname + "/public/assets"));
app.use("/app", express.static(__dirname + "/public/app"));

app.use(express.static(__dirname + '/public'));

app.use("*",function(req,res,next){
    res.header("Cache-Control","private,no-cache,no-store,must-revalidate");
    res.header("Expires","-1");
    res.header("Pragma","no-cache");
    next();
});

app.use('/*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port);
console.log("ManuCutillas server listening in port: " + port);