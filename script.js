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

function oakley(result){
  response.innerText = "Good girl! :)";
}

function chaplin() {
  response.innerText = "Bad boy! >:(";
}

function nothing() {
  response.innerText = "Must've been the wind...";
}

function handleUpload(files) {
  image.src = URL.createObjectURL(files[0]);
  setTimeout(classifyImage, 50);
}
