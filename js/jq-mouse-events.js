// Mouse Events

// <button class='clickBtn'>Click</button>;
// <button class="dblclickBtn">DblClick</button>
// <button class="overBtn">Mouseover</button>
// <button class="allBtn">All Events</button>
let button1 = $('.clickBtn');
let button2 = $('.dblclickBtn');
let button3 = $('.overBtn');
let button4 = $('.allBtn');

button1.click(() => {
  alert('You have single-clicked!');
});

button2.on('dblclick', () => {
  alert('You have double-clicked!');
});

button3.mouseover(() => {
  alert('Your pointer is over the button');
});

button4.on('click dblclick mouseover', () => {
  console.log('Have a nice day!');
});
