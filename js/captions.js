// define video and captions
const mainVideo = document.getElementById('mainVideo');
const cTime = mainVideo.currentTime
const capContainer = document.getElementById('container_captions');
const captions = document.querySelectorAll('p span');

// Skip to clicked captions
capContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    mainVideo.currentTime = event.target.getAttribute('cap_start');
  }
});


if (cTime > cap_start || cTime < cap_end) {

}

//if mainVideo.currentTime > cap_start && mainVideo.currentTime < cap_end {
//    highlight span
//}
