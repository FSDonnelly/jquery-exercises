$(document).ready(() => {
  let h1 = $('h1');
  console.log(h1);
  let a = $('a.blue-link');
  console.log(a);
});

// Events
// Mouse Events
// click, dblclick, mouseover
// Keyboard Events
// keypress, keyup, keydown
// Form Events
// submit, change, focus
// Document / Window Events
// load, resize, scroll

// Mouse Events

// <button class='clickBtn'>Click</button>;
let button1 = $('.clickBtn');
let button2 = $('.dblclickBtn');

button1.click(() => {
  alert('You have single-clicked!');
});

button2.on('dblclick', () => {
  alert('You have double-clicked!');
});
