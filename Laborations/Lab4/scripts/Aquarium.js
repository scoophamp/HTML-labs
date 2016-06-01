$(document).ready(function () {
       draw();
    });

function draw() {
  
    var canvas = document.getElementById('myaq');
    
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = "black";
    
    ctx.strokeRect(20, 20, 150, 100);
    
    
    ctx.fillStyle = "lightblue";
    
    ctx.fillRect(20, 20, 150, 100);
    
   
}

