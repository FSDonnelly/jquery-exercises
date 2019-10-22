// Form Events

{
  /* <form>
  <input type='text' />
  <input type='file' />
  <input type='submit' value='send' />
</form>; */
}

let textInp = $('input[type=text');
let fileInp = $('input[type=file');
let form = $('form');

textInp.on('focus', function() {
  $(this).addClass('focused');
});

textInp.on('blur', function() {
  $(this).removeClass('focused');
});

fileInp.on('change', function() {
  console.log('A file has been chosen');
});

form.on('submit', e => {
  //   e.preventDefault();
  alert('Your message has been sent');
});
