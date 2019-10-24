// addClass() removeClass() toggleClass()
let btn = $('.btn1');
let btn2 = $('.btn2');
let btn3 = $('.btn3');

let block = $('.block');

btn.on('click', () => {
  block.addClass('red-back');
});

btn2.on('click', () => {
  block.removeClass('red-back');
});

btn3.on('click', () => {
  block.toggleClass('red-back');
});
