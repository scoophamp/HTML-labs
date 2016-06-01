$(document).ready(function () {
       draw();
    });

function draw() {
    alert('1');
    var canvas = document.getElementById('myaq');
    alert('2');
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = "black";
    alert('3');
    ctx.strokeRect(20, 20, 150, 100);
    alert('4');
    
    ctx.fillStyle = "Blue";
    alert('5');
    ctx.fillRect(20, 20, 150, 100);
    
   
}

