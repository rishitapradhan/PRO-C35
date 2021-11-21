var canvas, backgroundImage;

var voterCount;

var voterName;
var voterAnswer;
var voterEmail;

var surveyState=0;

var database;

var form, voter, survey;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  survey = new Survey();
  survey.getState();
  survey.start();
}


function draw(){
 
}
