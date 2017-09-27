function scrollTo(id, offset, duration) {
  //starting px
  let start = document.getElementById(id).scrollTop;
  //the px distance of one interval
  let heightInterval = Math.abs(Math.floor((start - offset) / 2000));
  if (start >= offset) {
    let interval = setInterval(function() {
      start -= heightInterval;
      document.getElementById(`container`).scrollTop = start;
      clearBottomToTop(start, offset, interval);
    }, duration / 2000);
  } else {
    let interval = setInterval(function() {
      start += heightInterval;
      document.getElementById(`container`).scrollTop = start;
      clearTopToBottom(start, offset, interval);
    }, duration / 2000);
  }
}

function clearBottomToTop(start, offset, interval) {
  if (start <= offset) {
    document.getElementById(`container`).scrollTop = offset;
    clearInterval(interval);
  }
}
function clearTopToBottom(start, offset, interval) {
  if (start >= offset) {
    document.getElementById(`container`).scrollTop = offset;
    clearInterval(interval);
  }
}

var testOffset = 400;
var testDuration = 300;

document.getElementById('scroll-to-trigger').addEventListener('click', function onClick() {
  scrollTo('container', testOffset, testDuration)
});

document.getElementById('jquery-trigger').addEventListener('click', function onClick() {
  console.log('testOffset=', testOffset)
  $('#container').animate({
    scrollTop: testOffset
  }, testDuration);
});
