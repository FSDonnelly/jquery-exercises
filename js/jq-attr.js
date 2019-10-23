// Attr

//  <!-- <button>Change</!--> -->
//     <input type="text" value="hello" class="inp-1" />
//     <input type="range" class="inp-2" min="0" max="100" />
//     <input type="date" id="inp-3" />
//     <input type="file" id="inp-4" />

//     <!-- <div class="block-1"></div>
//     <div class="block-2"></div> -->
//     <!-- <img src="img/1.jpg" class="img-1" />
//     <img src="img/3.jpg" class="img-2" /> -->

// let btn = $('button');

// btn.on('click', () => {
// $('.img-1').attr('src', 'img/2.jpg');

// let src1 = $('.img-1').attr('src');
// $('.img-2').attr('src', src1);
//   let b1 = $('.block-1');
//   b1.attr('class', 'circle');

//   let b2 = $('.block-2');
//   b2.attr('class', b1.attr('class'));
// });

// Val
let val1 = $('.inp-1').attr('value');
// let val2 = $('.inp-2').attr('value'); // returns undefined in console
let val2 = $('.inp-2').val();
var val3 = $('input[type="date"]').val(); // returns undefined
// let val4 = $('input[type="file').val(); // returns undefined
let val4 = $('input[type="file"]').change(e => {
  var fileName = e.target.files[0].name;
  console.log('The file "' + fileName + '" has been selected.');
});
console.log(val1);
console.log(val2);
console.log(val3); // undefined unless run console.log($('input[type="date"]').val()) in console after selecting date
console.log(val4);
