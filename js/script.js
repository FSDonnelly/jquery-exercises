// Add element to a list
// ----JQuery Chaining----//
$('<li></li>')
  .addClass('red')
  .text('Item 4')
  .appendTo($('ul'));

// ----JQuery----//
// let el = $('<li></li>');
// let list = $('ul');

// el.addClass('red');
// el.text('Item 4');

// list.append(el);

// ----Javascript----//
// let el = document.createElement('li');
// let list = document.querySelector('ul');

// el.className = 'red';
// el.textContent = 'Item 4';
// list.appendChild(el);
