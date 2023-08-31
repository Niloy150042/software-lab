// alert("hey!!!");
let countDate= new Date('September 24, 2023 00:00:00').getTime();
function CountDown(){
    let now = new Date().getTime();
    gap = countDate-now;

    let second=1000;
    let minute= second*60;
    let hour = minute *60;
    let day = hour*24;

    let d= Math.floor(gap/(day));
    let h= Math.floor((gap %(day))/(hour));
    let m= Math.floor((gap %(hour))/(minute));
    let s= Math.floor((gap %(minute))/(second));


    document.getElementById('hour').innerText = h;
    document.getElementById('day').innerText = d;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}

setInterval(function(){
    CountDown();
},1000)


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//  calculating the orders 

function addcart(){
   const quantityInput= document.getElementById('quantityInput');
   const organicorange= document.getElementById('Organic-orange');
  
   const newitem= document.createElement('div');
    newitem.innerHTML=`<p Class=" text-center"> item added</p>`;
    
   organicorange.appendChild(newitem);

}
function addcart1(){
    const organicorange= document.getElementById('banana');
   
    const newitem1= document.createElement('div');
     newitem1.innerHTML=`<p Class=" text-center"> item added</p>`;
     
    organicorange.appendChild(newitem1);
 
 }

function addcart2(){
    const organicorange= document.getElementById('Organic-graps');
   
    const newitem1= document.createElement('div');
     newitem1.innerHTML=`<p Class=" text-center"> item added</p>`;
     
    organicorange.appendChild(newitem1);
 
 }

function addcart3(){
    const organicorange= document.getElementById('Organic-Milk');
   
    const newitem1= document.createElement('div');
     newitem1.innerHTML=`<p Class=" text-center"> item added</p>`;
     
    organicorange.appendChild(newitem1);
 
 }

function addcart4(){
    const organicorange= document.getElementById('Organic-malta');
   
    const newitem1= document.createElement('div');
     newitem1.innerHTML=`<p Class=" text-center"> item added</p>`;
     
    organicorange.appendChild(newitem1);
 
 }

function addcart5(){
    const organicorange= document.getElementById('Organic-tomato');
   
    const newitem1= document.createElement('div');
     newitem1.innerHTML=`<p Class=" text-center"> item added</p>`;
     
    organicorange.appendChild(newitem1);
 
 }