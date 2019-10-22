// Events

// Mouse Events
// click, dblclick, mouseover

// Keyboard Events
// keypress, keyup, keydown

// Form Events
// submit, change, focus

// Document / Window Events
// load, resize, scroll

// Window Events

$(window).on('load', () => {
  console.log('The page has loaded');
});

$(window).on('resize', () => {
  console.log(`Width: ${$(window).width()}; Height: ${$(window).height()}`);
});

$(window).on('scroll', () => {
  console.log(`Offset top: ${$(window).scrollTop()}`);
});

$(document).ready(() => {
  let h1 = $('h1');
  console.log(h1);
  let a = $('a.blue-link');
  console.log(a);
});
