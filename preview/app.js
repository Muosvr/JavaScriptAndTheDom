//P2: get element by id
//P3: get elements by class or tag
// var titles = document.getElementsByClassName('title');
// console.log(titles);

// var list = document.getElementsByTagName('li');
// console.log(list);

//because useing the above two get element method produces an HTML collection which cannot
//be treated like an array, we need to put them in Arry.from() to generated an array
//The forEach function can then iterate through the generated array
// Array.from(titles).forEach(function(item){
//   console.log(item);
// });

// //P4: Query Selector

// var wrapper = document.querySelector('wrapper');

// var wmf = document.querySelectorAll('#book-list li');

// //P5: Changing Text and HTML content
// const book = document.querySelectorAll("#book-list li .name");

// book.forEach(function(item){
//   item.textContent += ' (book title)';
// })

// const bookList = document.querySelector('#book-list');
// bookList.innerHTML += '<p>This is how you add to html</p>';

//P6: DOM nodes
// const banner = document.querySelector("#page-banner");
// console.log(banner.nodeName);// returns a number
// console.log(banner.nodeType);// return <div> or <p>...
// console.log(banner.hasChildNodes()); //returns true or false
// console.log(banner.cloneNode(true)); // include child nodes
// console.log(banner.cloneNode(false));//do not include child nodes

//P7 Traverse from one node to another
// const bookList = document.querySelector("#book-list");
// console.log('The parent Node is: ', bookList.parentNode);
// console.log('The parent Element is: ', bookList.parentElement);
// console.log('The parent Element of the parent Element is: ', bookList.parentElement.parentElement);

// console.log(bookList.childNodes); // getting the line breaks as well as the children
// console.log(bookList.children); // only getting the children

//P8 Traverse from sibling to sibling
// console.log(bookList.nextSibling);
// console.log(bookList.nextElementSibling);
// console.log(bookList.previousSibiling);
// console.log(bookList.previousElementSibling);
// bookList.previousElementSibling.querySelector('p').innerHTML += '<br/>Too cool for anyone else';

//P9 DOM events
// var btns = document.querySelectorAll('#book-list .delete');
// Array.from(btns).forEach(function(btn){
//   btn.addEventListener('click', function(e){
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   })
// })

// const link = document.querySelector('#page-banner a');
// link.addEventListener('click', function(e){
//   e.preventDefault();
  
//   console.log('redirection to', e.target.textContent,'was prevented');
// })

//P10 Event Bubbling

var ListUl = document.querySelector('#book-list ul')
ListUl.addEventListener('click', function(e){
  if(e.target.className === 'delete'){
    var li = e.target.parentNode;
    ListUl.removeChild(li);
  }
})

//P11 Interacting with Forms
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){ //create eventListener for a submit event (clicking the button in the form)
  e.preventDefault(); //prevent default action of refreshing the page
  const value = addForm.querySelector('input[type="text"]').value; //find value and store in the input field
  console.log(value);

//P12 Creating elements

//Create elements
  const li = document.createElement('li');
  const bookText = document.createElement('span');
  const deleteBtn = document.createElement('span');
  
  //Append to li item
  li.appendChild(bookText);
  li.appendChild(deleteBtn);
  
  //Assign text
  bookText.textContent = value;
  deleteBtn.textContent = 'Delete';
  
  //Add classes
  bookText.classList.add('name');
  deleteBtn.classList.add('delete');
  
  //append to page
  ListUl.appendChild(li);
  
})