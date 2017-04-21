// define video and captions
var mainVideo = document.getElementById('mainVideo');
var capContainer = document.getElementById('container_captions');
var captions = document.querySelectorAll('span');

// Skip to clicked captions
capContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    mainVideo.currentTime = event.target.getAttribute('cap_start');
  }
});

// Highlight Listener
$('#mainVideo').on('timeupdate', () => {
    for(let i = 0; i < captions.length; ++i) {
        let cTime = mainVideo.currentTime
        let start = captions[i].getAttribute('cap_start');
        let end = captions[i].getAttribute('cap_end');
        if(cTime > start && cTime < end) {
            captions[i].className = 'highlight';
        } else {
            captions[i].className = "";
        }
    }
});
