object=""
status_model=""
function preload(){

}
function setup(){
   canvas=createCanvas(500,500)
   canvas.center()
   video=createCapture(VIDEO)
   video.size(500,500)
   video.hide()
  


   
}
function draw(){
image(video,0,0,500,500)
if(status_model !=""){
   objectdetector.detect(video,gotResult)
    
   document.getElementById("status").innerHTML = "Status= Object Detected"
   for(i=0;i<object.length;i++){
      fill(255,0,0)
      textSize(25)
      percentage=Math.floor(object[i].confidence*100)
    
      text(object[i].label+" "+percentage+"%",object[i].x,object[i].y)


      noFill()
      rect(object[i].x,object[i].y,object[i].width,object[i].height)
      document.getElementById("objects").innerHTML= "Number of Objects= "+ object.length
   }
   
}

}
function modelLoaded(){
   console.log("Model is Loaded")
   document.getElementById("status").innerHTML = "Status= Detecting Objects"
   status_model=true
 
   
}
function gotResult(error,result){
if (error){
console.log(error)
}
else (result)
   console.log(result)
   object=result
   
}
function start(){
   objectdetector=ml5.objectDetector("cocossd",modelLoaded)
}