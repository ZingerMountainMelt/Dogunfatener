const { ml5 } = window;
const classifier = ml5.imageClassifier(
  "https://teachablemachine.withgoogle.com/models/x7j9-fYZd/model.json",
  console.log
);

const result = document.querySelector(".result h2");
const image = document.querySelector(".image");
const response = document.querySelector(".response h4");

async function classifyImage() {
  const results = await classifier.classify(image);
  result.innerText = results[0].label;
  
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
        Email.send({
          SecureToken: "8e5f49d9-d5f7-4c8c-a4ba-f491fd062ae9",
          From: "dogdetectoriwd@gmail.com",
          To: 'xidaltonx@gmail.com',
          Subject: "Oakley be eatin",
          Body: "Goooooood girlllllll",
          Attachments : [
	          {
		          name : "Oakley.png",
		          path : "https://drive.google.com/file/d/13tEtfc8Um83EBNY0vV2NX0G43i2pJPDO/view?usp=sharing"
	          }]
        });
}
      
function sendEmailC(){
        Email.send({
          SecureToken: "8e5f49d9-d5f7-4c8c-a4ba-f491fd062ae9",
          From: "dogdetectoriwd@gmail.com",
          To: 'xidaltonx@gmail.com',
          Subject: "CHAPLIN",
          Body: "Go get him",
          Attachments : [
	          {
		          name : "Chaplin.png",
		          path : "https://drive.google.com/file/d/13tEtfc8Um83EBNY0vV2NX0G43i2pJPDO/view?usp=sharing"
	          }]
        });
}

function oakley(result){
  response.innerText = "Good girl! :)";
  sendEmailO();
}

function chaplin() {
  response.innerText = "Bad boy! >:(";
  sendEmailC();
}

function nothing() {
  response.innerText = "Must've been the wind...";
}

function handleUpload(files) {
  image.src = URL.createObjectURL(files[0]);
  setTimeout(classifyImage, 50);
}
