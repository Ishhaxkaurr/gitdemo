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

var secondItem =  document.querySelector('.list-group-item:nth=-child(2)');
secondItem.style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0; i<odd.length; i++){
    odd[i].style.backgroundcolor = 'green'
}