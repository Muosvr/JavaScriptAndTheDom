//P18 DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function(){
  
    //P10 Event Bubbling
  var list = document.querySelector('#book-list ul')
  list.addEventListener('click', function(e){
    if(e.target.className === 'delete'){
      var li = e.target.parentNode;
      list.removeChild(li);
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
    list.appendChild(li);
    
  })
  
  //P14 Attributes
  // var book = document.querySelector('li:first-child.name');
  // book.getAttribute('class');
  // book.setAttribute('class','name-2');
  // book.hasAttribute('class');
  // book.removeAttribute('class');
  
  //P15 Checkboxes & change events
  const hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change',function(e){
    if(hideBox.checked){
      list.style.display = 'none';
    }else{
      list.style.display =  'initial';
    }
  });
  
  //P16 Create a search filter
  const searchBar = document.querySelector('#search-books');
  searchBar.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    const books = document.querySelectorAll('li');
    books.forEach(function(item){
      const title = item.textContent.toLowerCase();
      if (title.indexOf(term) == -1){
        item.style.display = 'none';
      }else{
        item.style.display = 'block'
      }
    });
  });
  
  //P17 Tabbed Content
  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  
  tabs.addEventListener('click',function(e){
    if(e.target.tagName == "LI");{//.tagName returns uppercase HTML
      const targetPanel = document.querySelector(e.target.dataset.target);//find the target Panel using the dataset-target attribute
      
      panels.forEach(function(panel){
        if(panel === targetPanel){
          panel.classList.add('active');
        }else{
          panel.classList.remove('active');
        }
      })
    }
  })


});

