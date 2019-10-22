// Visual Effects
let hideBtn = $('.hideBlock');
let showBtn = $('.showBlock');
let toggle = $('.toggle');
let block = $('#block');
let block2 = $('#block-2');

//Other Func
// -- fadeIn(), fadeOut(), hide(), show(), slideUp(), slideDown()
// -- toggle() = {show(), hide()}
// -- fadeToggle() = {fadeIn(), fadeOut()}
// -- slideToggle() = {slideDown(), slideUp()}

// hideBtn.on('click', () => {
//   block.slideUp();
//   block2.slideDown();
// });

// showBtn.on('click', () => {
//   block.slideDown();
//   block2.slideUp();
// });

// hideBtn.on('click', () => {
//   block.fadeIn();
//   block2.fadeOut();
// });

// showBtn.on('click', () => {
//   block.fadeOut();
//   block2.fadeIn();
// });

// hideBtn.on('click', () => {
//   block.hide();
//   block2.show();
// });

// showBtn.on('click', () => {
//   block.show();
//   block2.hide();
// });

// toggle.on('click', () => {
//   block.toggle();
//   block2.toggle();
// });

toggle.on('click', () => {
  block.fadeToggle();
  block2.slideToggle();
});
