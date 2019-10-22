// Style with JQuery
let btn = $('.btn');
let block = $('.block');
let block2 = $('.block-2');

btn.on('click', () => {
  let style = {
    boxShadow: '0 0 40px rgba(0, 0, 0, 0.8)',
    borderRadius: '180px',
    height: '400px',
    width: '400px',
    margin: '0 auto'
  };
  block.css(style);
  block2.css({
    width: block.css('width'),
    height: block.css('height'),
    backgroundColor: 'yellow'
  });
});
