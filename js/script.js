// Style with JQuery
let btn = $('.btn');
btn.on('click', () => {
  let block = $('.block');
  let style = {
    boxShadow: '0 0 40px rgba(0, 0, 0, 0.8)',
    borderRadius: '180px',
    height: '400px',
    width: '400px',
    margin: '0 auto',
    backgroundImage: 'url(js/batman.png)'
  };
  block.css(style).toggle('slow', 'linear');
});
