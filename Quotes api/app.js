var i=0;
var url='https://type.fit/api/quotes'

window.addEventListener('load',fetchQutoes);
var nextQuotes=document.querySelector('#btn');
var myQuotes=document.querySelector('#quotes');
var author=document.querySelector('#author');
nextQuotes.addEventListener('click',fetchQutoes);

function fetchQutoes(){
fetch(url)
.then((res)=>res.json())
.then((data)=>{
       myQuotes.innerHTML=data[i].text;
       author.innerHTML=data[i].author;
    i++;
   
})

}