//P2: get element by id
//P3: get elements by class or tag
var titles = document.getElementsByClassName('title');
console.log(titles);

var list = document.getElementsByTagName('li');
console.log(list);

//because useing the above two get element method produces an HTML collection which cannot
//be treated like an array, we need to put them in Arry.from() to generated an array
//The forEach function can then iterate through the generated array
Array.from(titles).forEach(function(item){
  console.log(item);
});

//P4: Query Selector

var wrapper = document.querySelector('wrapper');

var wmf = document.querySelectorAll('#book-list li');

//P5: Changing Text and HTML content
const book = document.querySelectorAll("#book-list li .name");

book.forEach(function(item){
  item.textContent += ' (book title)';
})

const bookList = document.querySelector('#book-list');
bookList.innerHTML += '<p>This is how you add to html</p>';

//P6: DOM nodes
const banner = document.querySelector("#page-banner");
console.log(banner.nodeName);// returns a number
console.log(banner.nodeType);// return <div> or <p>...
console.log(banner.hasChildNodes()); //returns true or false
console.log(banner.cloneNode(true)); // include child nodes
console.log(banner.cloneNode(false));//do not include child nodes
