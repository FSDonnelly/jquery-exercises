// Attr

let btn = $('button');

btn.on('click', () => {
  // $('.img-1').attr('src', 'img/2.jpg');

  // let src1 = $('.img-1').attr('src');
  // $('.img-2').attr('src', src1);
  let b1 = $('.block-1');
  b1.attr('class', 'circle');

  let b2 = $('.block-2');
  b2.attr('class', b1.attr('class'));
});
