// $(document).ready(() => {
//   let h1 = $('h1');
//   console.log(h1);
//   let a = $('a.blue-link');
//   console.log(a);
// });

// Events
// Mouse Events
// click, dblclick, mouseover
// Keyboard Events
// keypress, keyup, keydown
// Form Events
// submit, change, focus
// Document / Window Events
// load, resize, scroll

// Keyboard Events
{
  /* <input type="text"/> */
}
let inp = $('.press');
let inp2 = $('.keyDown');
let inp3 = $('.keyUp');

inp.on('keypress', e => {
  console.log(`Keypress is typing: ${e.target.value}`);
});

inp2.on('keydown', e => {
  console.log(`Keydown is typing: ${e.target.value}`);
});

inp3.on('keyup', e => {
  console.log(`Keyup is typing: ${e.target.value}`);
});
