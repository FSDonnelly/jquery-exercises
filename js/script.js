// addClass() removeClass()
let btn = $('.btn1');
let btn2 = $('.btn2');

let block = $('.block');

btn.on('click', () => {
  block.addClass('red-text');
});

btn2.on('click', () => {
  block.removeClass('red-text');
});
