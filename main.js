img="";
status="";
objects=[];

function preload (){
    
}

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: ";
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide;
}
function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: "
}
function modelLoaded(){
    console.log("Model Loaded!")
    status=true;
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw() {
    // Clear the canvas if needed
  
    // Iterate through the objects array
    for (let i = 0; i < objects.length; i++) {
      let label = objects[i].label;
  
      // Check if the label is equal to "person"
      if (label === "person") {
        // Update the HTML element with "baby detected" text
        document.getElementById("status").textContent = "Baby detected";
  
        // Stop playing the alert sound
        let alertSound = document.getElementById("alertSound");
        alertSound.pause();
      } else {
        // Update the HTML element with "baby not detected" text
        document.getElementById("status").textContent = "Baby not detected";
  
        // Start playing the alert sound
        let alertSound = document.getElementById("alertSound");
        alertSound.play();
      }
    }
  
    // Check if no objects are detected
    if (objects.length < 1) {
      // Update the HTML element with "baby not detected" text
      document.getElementById("status").textContent = "Baby not detected";
  
      // Start playing the alert sound
      let alertSound = document.getElementById("alertSound");
      alertSound.play();
    }
  }



