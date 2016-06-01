$(document).ready(function () {
     $('#snapshotbuttono').on('click', snapo);
});
function snapo() {
    var canvase = document.getElementById('mycanvaso')
    var videoe = document.getElementById('myvideoo')
    canvase.getContext('2d').drawImage(videoe, 0, 0);
}
