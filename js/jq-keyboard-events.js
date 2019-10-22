// Keyboard Events
{
  /* <input class="press" type="text" />
<input class="keyDown" type="text" />
<input class="keyUp" type="text" /> */
}

let inp = $('.press');
let inp2 = $('.keyDown');
let inp3 = $('.keyUp');

inp.on('keypress', e => {
  if (e.which === 13 && e.shiftKey) {
    console.log(`Keypress typed: ${e.target.value}`);
  }
});

inp2.on('keydown', e => {
  console.log(`Keydown is typing: ${e.target.value}`);
});

inp3.on('keyup', e => {
  console.log(`Keyup is typing: ${e.target.value}`);
});
