const api_url = "https://script.google.com/macros/s/AKfycbzehsYi8UZ0p-GPvrbS9IDaMq4Z4JAaGc44nEDYbMa3b1nsIFOG/exec";
const animg = "https://drive.google.com/uc?id=1B_X5ik7PwJbenk8MZo958ca4INq0VG8d";

const { ml5 } = window;
const classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/x7j9-fYZd/model.json", console.log);

const result = document.querySelector(".result h2");
const image = document.querySelector(".image");
const response = document.querySelector(".response h4");

window.addEventListener('DOMContentLoaded',addImages)
const output = document.querySelector('.output');

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
      let imgURL = url;
      console.log(imgURL);
      document.getElementById('url').textContent = url;
      
      let img = document.createElement('img');
      img.setAttribute('src',val.url);
      output.appendChild(img);
      console.log(img);
      
      classifyImage("https://cdn.mos.cms.futurecdn.net/QjuZKXnkLQgsYsL98uhL9X.jpg");
    })
  })
}

console.log("Pre-Classifier");

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
        console.log(animg);
  
        Email.send({
          SecureToken: "8e5f49d9-d5f7-4c8c-a4ba-f491fd062ae9",
          From: "dogdetectoriwd@gmail.com",
          To: 'xidaltonx@gmail.com',
          Subject: "Oakley is eating",
          Body: "Goooooood girllllll",
          Attachments : [
	          {
		          name : "Oakley.jpg",
		          path : animg
	          }]
        });
}
      
function sendEmailC(){
        console.log("Chaplin Email Start");
        console.log(animg);
  
        Email.send({
          SecureToken: "8e5f49d9-d5f7-4c8c-a4ba-f491fd062ae9",
          From: "dogdetectoriwd@gmail.com",
          To: 'xidaltonx@gmail.com',
          Subject: "CHAPLIN",
          Body: "Go get him",
          Attachments : [
	          {
		          name : "Chaplin.jpg",
		          path : animg
	          }]
        });
}

function oakley(){
  console.log("Oakley!");
  response.innerText = "Good girl! :)";
  sendEmailO();
}

function chaplin() {
  console.log("Chaplin!");
  response.innerText = "Bad boy! >:(";
  sendEmailC();
}

function nothing() {
  console.log("Nothing");
  response.innerText = "Must've been the wind...";
}

function handleUpload(files) {
  image.src = "https://cdn.mos.cms.futurecdn.net/QjuZKXnkLQgsYsL98uhL9X.jpg";
  setTimeout(classifyImage, 50);
}
