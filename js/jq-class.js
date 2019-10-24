// .block {
//   width: 200px;
//   height: 200px;
//   background-color: orange;
// }

// .red-back {
//   background-color: red;
// }

{
  /* <button class="btn1">Change</button>
    <button class="btn2">back</button>
    <button class="btn3">toggle</button>
<div class="block"></div> */
}

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
