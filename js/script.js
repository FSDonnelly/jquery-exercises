// Attr

let btn = $('button');
let img = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg'];

btn.on('click', () => {
  $('.img-1').attr('src', 'img/2.jpg');

  let src1 = $('.img-1').attr('src');
  $('.img-2').attr('src', src1);
});
