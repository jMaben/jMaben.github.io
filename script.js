let el = $('h1');
let titleArray = el.text().split('');

el.empty();
setTimeout(function loop() {
  el.append('<span>' + titleArray.shift() + '</span>');
 // setTimeout( colorIt, 1);       
  if (titleArray.length) {
    setTimeout(loop, 50);
  }
}, 50);

function colorIt(){
    $('span:last-child:not(.color)', el).addClass('color');
}
