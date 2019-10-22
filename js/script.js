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

// Form Events
let textInp = $('input[type=text');

textInp.on('focus', function() {
  $(this).addClass('focused');
});

textInp.on('blur', function() {
  $(this).removeClass('focused');
});
