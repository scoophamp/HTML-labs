$(document).ready(function () {
    $('#snapshotbutton').on('click', snap);
   });

function snap() {
    var canvas = document.getElementById('mycanvas')
    var video = document.getElementById('myvideo')
    canvas.getContext('2d').drawImage(video, 0, 0);
}
