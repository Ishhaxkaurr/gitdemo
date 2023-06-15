//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.doctype);
//console.log(documen.all[10]);
//console.log(document.forms);
//console.log(document.links);
//console.log(document.getElementById('header-title'));
 //var headerTitle = document.getElementById('header-title');
 //console.log(headerTitle);
 //headerTitle.textContent= 'hello';
 //headerTitle.innerText="goodbye";
 //console.log(headerTitle.innerText);
 //headerTitle.innerHTML= '<h3>Hello</3';
 //headerTitle.style.borderBottomColor - 'solid 3px #000';
//var items = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[2]);
//li[2].style.bacgroundColor = 'red'
//li[2].style.fontWeight = 'Italics'

//for(var i = 0; li.length; i++){
//    li[i].style.backgroundColor= 'pink';
//}
//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px #ccc';

//var input = document.querySelector('input')
//input.value = 'hello world';

//var secondItem =  document.querySelector('.list-group-item:nth=-child(2)');
//secondItem.style.color = 'green';

//var odd = document.querySelectorAll('li:nth-child(odd)');
//for(var i = 0; i<odd.length; i++){
//    odd[i].style.backgroundcolor = 'green'
//}

var itemList = document.querySelectorAll('#items');
//parentNode
console.log(itemsList.parentNode);
itemList.parentNode.style.background = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode)
// parentElement
console.log(itemsList.parentElement);
itemList.parentElement.style.background = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement)
//childnodes
console.log(itemsList.childNodes);
console.log(itemsList.children[1]);
// firstChild
console.log(itemList.firstChild);
// firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello";
//lastChild
console.log(itemList.lastChild);
// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="hello 4";
// nextSibling
console.log(itemList.nextSibling);
// nextElementSibling
console.log(itemsList.nextElementSibling);
// previousSibling
console.log(itemList.previousSibling);
// previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

//createElement
//Create a div
var newDiv = document.createElement('div');
//Add class
newDriv.className= 'hello';
// add id
newDiv.id = 'hello1';
// add attr
newDiv.setAttribute('title', 'hello Div');
// create text node
var newDivText = document.createTextNode('Hello world');
// add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv, h1);
