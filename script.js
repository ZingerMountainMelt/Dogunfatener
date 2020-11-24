const api_url = "https://script.google.com/macros/s/AKfycbzehsYi8UZ0p-GPvrbS9IDaMq4Z4JAaGc44nEDYbMa3b1nsIFOG/exec";

const { ml5 } = window;
const classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/x7j9-fYZd/model.json", console.log);

const result = document.querySelector(".result h2");
const image = document.querySelector(".image");
const response = document.querySelector(".response h4");

window.addEventListener('DOMContentLoaded', addImages)
const output = document.querySelector('.output');

var GV_image = null;

let arrO = [];
let arrC = [];

const chaplinColor = 'blue';
const oakleyColor = 'pink';

//Caloric data for food
var wetFood = 318;
var dryFood = 198;
var trueChew = 58;
var pupperoni = 25;
var greenie = 90;
var biscuit = 30;
var smartBone = 45;
var snausage = 30;
var cheese = 30;

//Guaranteed intake (excluding oakley's dinner, which may be eaten by chaplin)
var oakleyCalories = trueChew + 2 * pupperoni + 3 * biscuit + 4 * snausage + cheese;
var chaplinCalories = wetFood + dryFood + trueChew + pupperoni + greenie + 2 * biscuit + smartBone + 3 * snausage + cheese;

const oakleyRecommended = 600;
const chaplinRecommended = 850;

//setTimeout(function(){ console.log(GV_image); }, 5000);

async function classifyImage() {
  const results = await classifier.classify(image);
  result.innerText = results[0].label;
  console.log("Classification Start");
  
    if (result.innerText == "Chaplin") {
      chaplin();
    }
    
    else if (result.innerText == "Oakley") {
      oakley();
    }
  
    else if (result.innerText == "Nothing") {
      nothing();
    }
  
    else {
      response.innerText = "Error";
    }
}

function sendEmailO(){
        console.log("Oakley Email Start");
        console.log(GV_image);
  
        Email.send({
          SecureToken: "8e5f49d9-d5f7-4c8c-a4ba-f491fd062ae9",
          From: "dogdetectoriwd@gmail.com",
          To: 'xidaltonx@gmail.com',
          Subject: "Oakley is eating her own food",
          Body: "Goooooood girllllll",
          Attachments : [
	          {
		          name : "Oakley.jpg",
		          path : GV_image
	          }]
        });
}
      
function sendEmailC(){
        console.log("Chaplin Email Start");
        console.log(GV_image);
  
        Email.send({
          SecureToken: "8e5f49d9-d5f7-4c8c-a4ba-f491fd062ae9",
          From: "dogdetectoriwd@gmail.com",
          To: 'xidaltonx@gmail.com',
          Subject: "CHAPLIN IS EATING OAKLEY'S FOOD",
          Body: "Go stop him",
          Attachments : [
	          {
		          name : "Chaplin.jpg",
		          path : GV_image
	          }]
        });
}

function sendEmailN(){
        console.log("Neutral Email Start");
        console.log(GV_image);
  
        Email.send({
          SecureToken: "8e5f49d9-d5f7-4c8c-a4ba-f491fd062ae9",
          From: "dogdetectoriwd@gmail.com",
          To: 'xidaltonx@gmail.com',
          Subject: "Movement Detected",
          Body: "Check for dog",
          Attachments : [
	          {
		          name : "Dog?.jpg",
		          path : GV_image
	          }]
        });
}

function newImage(){
  console.log("New Image Function Start");
  alert("A new image has appeared");
  sendEmailN();
}

function oakley(){
  console.log("Oakley!");
  response.innerText = "Good girl! :)";
  sendEmailO();
  arrO.push(wetFood);
  arrC.push(0);
  if (arrO.length == 8){
    arrO.shift();
  }
  if (arrC.length == 8){
    arrC.shift();
  }
}

function chaplin() {
  console.log("Chaplin!");
  response.innerText = "Bad boy! >:(";
  sendEmailC();
  arrC.push(wetFood);
  arrO.push(0);
  if (arrC.length == 8){
    arrC.shift();
  }
  if (arrO.length == 8) {
    arrO.shift();
  }
}

function nothing() {
  console.log("Nothing");
  response.innerText = "Must've been the wind...";
}

function handleUpload(files) {
  image.src = URL.createObjectURL(files[0]);
  setTimeout(classifyImage, 50);
}

for (var i=0; i<1000; i++) {
  setTimeout(addImages, 50000);  //Each iteration should wait 50000 milliseconds, not for the start of the loop
}

if (arrC.length > 0){
  var oneC = chaplinCalories + arrC[0];
}
else {
  var oneC = chaplinCalories;
}
if (arrC.length >= 1){
  var twoC = chaplinCalories + arrC[1];
}
else {
  var twoC = chaplinCalories;
}
if (arrC.length >= 2){
  var threeC = chaplinCalories + arrC[2];
}
else {
  var threeC = chaplinCalories;
}
if (arrC.length >= 3){
  var fourC = chaplinCalories + arrC[3];
}
else {
  var fourC = chaplinCalories;
}
if (arrC.length >= 4){
  var fiveC = chaplinCalories + arrC[4];
}
else {
  var fiveC = chaplinCalories;
}
if (arrC.length >= 5){
  var sixC = chaplinCalories + arrC[5];
}
else {
  var sixC = chaplinCalories;
}
if (arrC.length >= 6){
  var sevenC = chaplinCalories + arrC[6];
}
else {
  var sevenC = chaplinCalories;
}

//Oakley daily caloric intake
if (arrO.length > 0){
  var oneO = oakleyCalories + arrO[0];
}
else {
  var oneO = oakleyCalories;
}
if (arrO.length >= 1){
  var twoO = oakleyCalories + arrO[1];
}
else {
  var twoO = oakleyCalories;
}
if (arrO.length >= 2){
  var threeO = oakleyCalories + arrO[2];
}
else {
  var threeO = oakleyCalories;
}
if (arrO.length >= 3){
  var fourO = oakleyCalories + arrO[3];
}
else {
  var fourO = oakleyCalories;
}
if (arrO.length >= 4){
  var fiveO = oakleyCalories + arrO[4];
}
else {
  var fiveO = oakleyCalories;
}
if (arrO.length >= 5){
  var sixO = oakleyCalories + arrO[5];
}
else {
  var sixO = oakleyCalories;
}
if (arrO.length >= 6){
  var sevenO = oakleyCalories + arrO[6];
}
else {
  var sevenO = oakleyCalories;
}

let myChart = document.getElementById('myChart').getContext('2d');

let calChart = new Chart(myChart, {
      type:'horizontalBar',
      data:{
        labels:['1', '2', '3', '4', '5', '6', '7'],
        datasets:[{
          label: 'Chaplin',
          backgroundColor: chaplinColor,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000',
          data:[
            oneC,
            twoC,
            threeC,
            fourC,
            fiveC,
            sixC,
            sevenC
          ]
        }, {
          label:'Oakley',
          backgroundColor: oakleyColor,
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000',
          data:[
            oneO,
            twoO,
            threeO,
            fourO,
            fiveO,
            sixO,
            sevenO
          ],
        }]
      },
      options:{
        title:{
          display:true,
          text:'Dog Calorie Tracker',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
});

function addImages(){
  fetch(api_url).then(function(rep) {
    return rep.json()
  }).then(function(json){
    console.log(json);
    json.data.forEach(function(val) {
      const { id, url, file_name } = val;
      console.log(url);
      console.log(id);
      console.log(file_name);
       if (GV_image != null && url != GV_image) {
        console.log("url mismatch");
        newImage();
      }
      GV_image = url;
      console.log(GV_image);
      document.getElementById('driveImage').src = url;
      document.getElementById('id').textContent = id;
    })
  })
}
