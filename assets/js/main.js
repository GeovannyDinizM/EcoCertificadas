// Index Background
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('videoBackground');
    var img = document.getElementById('imgBackground');

    video.src = './assets/videos/backgroundV.mp4';
    img.src = './assets/img/imgBackground.jpg';
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

