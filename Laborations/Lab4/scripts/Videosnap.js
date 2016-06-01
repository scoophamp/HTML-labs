$(document).ready(function () {
    $('#snapshotbutton').on('click', snap);
    $('#snapshotbutton1').on('click', snap1);
});

function snap() {
    var canvas = document.getElementById('mycanvas')
    var video = document.getElementById('myvideo')
    canvas.getContext('2d').drawImage(video, 0, 0);
}
function snap1() {
    var canvas1 = document.getElementById('mycanvas1')
    var video1 = document.getElementById('myvideo1')
    canvas1.getContext('2d').drawImage(video, 0, 0);
}
