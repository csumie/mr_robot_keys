window.addEventListener('keydown', function(e) {
  // console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // console.log(audio);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(key);
  if(!audio)return; //will stop function from running
  audio.currentTime=0; //will jump to the start
  audio.play();
  key.classList.add('playing');
});
function removeTransition(e) {
  // console.log(e);
  if(e.propertyName !== 'transform') return; // skip if it's not a transform property
  // console.log(e.propertyName);
  this.classList.remove('playing');

}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
