// Visual Effects
let hideBtn = $('.hideBlock');
let showBtn = $('.showBlock');
let block = $('#block');
let block2 = $('#block-2');

hideBtn.on('click', () => {
  block.slideUp();
  block2.slideDown();
});

showBtn.on('click', () => {
  block.slideDown();
  block2.slideUp();
});
