// alert("hey!!!");
let countDate = new Date("September 24, 2023 00:00:00").getTime();
function CountDown() {
  let now = new Date().getTime();
  gap = countDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  document.getElementById("hour").innerText = h;
  document.getElementById("day").innerText = d;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
}

setInterval(function () {
  CountDown();
}, 1000);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//  calculating the orders

function addcart() {
  const orangeprice = document.getElementById("orange-price");
  const quantityInput = document.getElementById("quantityInput");

  const orangepricestring = orangeprice.innerText;
  const priceoforange = parseFloat(orangepricestring);

  const quantityInputstring = quantityInput.value;
  const quantity = parseInt(quantityInputstring);

  const priceorange = quantity * priceoforange;
  orangeprice.innerText = priceorange;

  const organicorange = document.getElementById("Organic-orange");

  const newitem = document.createElement("div");
  newitem.innerHTML = `<p Class=" text-center"> item added</p>`;

  organicorange.appendChild(newitem);
}
function addcart1() {
  const quantityInput = document.getElementById("quantityInput1");
  const quantityInputstring = quantityInput.value;
  const quantity = parseInt(quantityInputstring);

  const organicorange = document.getElementById("banana");
  const bananaprice = document.getElementById("banana-price");
  const bananapricestring = bananaprice.innerText;
  const priceofbanana = parseFloat(bananapricestring);
  const pricebanana = priceofbanana * quantity;
  bananaprice.innerText = pricebanana;

  const newitem1 = document.createElement("div");
  newitem1.innerHTML = `<p Class=" text-center"> item added</p>`;

  organicorange.appendChild(newitem1);
}

function addcart2() {
  const organicorange = document.getElementById("Organic-graps");
  const quantityInput = document.getElementById("quantityInput2");
  const quantityInputstring = quantityInput.value;
  const quantity = parseInt(quantityInputstring);
  const grapsprice = document.getElementById("graps-price");
  const grapspricestring= grapsprice.innerText;
  const priceofgraps= parseFloat(grapspricestring);
  
  const pricegraps = priceofgraps * quantity;
  grapsprice.innerText = pricegraps;
  

  const newitem1 = document.createElement("div");
  newitem1.innerHTML = `<p Class=" text-center"> item added</p>`;

  organicorange.appendChild(newitem1);
}

function addcart3() {
  const organicorange = document.getElementById("Organic-Milk");
  const quantityInput = document.getElementById("quantityInput3");
  const quantityInputstring = quantityInput.value;
  const quantity = parseInt(quantityInputstring);
  const grapsprice = document.getElementById("milk-price");
  const grapspricestring= grapsprice.innerText;
  const priceofgraps= parseFloat(grapspricestring);
  
  const pricemilk = priceofgraps * quantity;
  grapsprice.innerText = pricemilk;






  const newitem1 = document.createElement("div");
  newitem1.innerHTML = `<p Class=" text-center"> item added</p>`;

  organicorange.appendChild(newitem1);
}

function addcart4() {
  const organicorange = document.getElementById("Organic-malta");

  const quantityInput = document.getElementById("quantityInput4");
  const quantityInputstring = quantityInput.value;
  const quantity = parseInt(quantityInputstring); 
  console.log(quantity);
  

  const maltaprice= document.getElementById('malta-price')
  const maltapricestring = maltaprice.innerText;
  const priceofmalta= parseFloat(maltapricestring);
  const pricemalta = priceofmalta * quantity;
  maltaprice.innerText = pricemalta;


  

  const newitem1 = document.createElement("div");
  newitem1.innerHTML = `<p Class=" text-center"> item added</p>`;

  organicorange.appendChild(newitem1);
}

function addcart5() {
  const organicorange = document.getElementById("Organic-tomato");
  const quantityInput = document.getElementById("quantityInput5");
  const quantityInputstring = quantityInput.value;
  const quantity = parseInt(quantityInputstring); 
  const maltaprice= document.getElementById('tomato-price')
  const maltapricestring = maltaprice.innerText;
  const priceofmalta= parseFloat(maltapricestring);
  const pricetomato = priceofmalta * quantity;
  maltaprice.innerText = pricetomato;


  const newitem1 = document.createElement("div");
  newitem1.innerHTML = `<p Class=" text-center"> item added</p>`;

  organicorange.appendChild(newitem1);
  
}

function handleclicked(){

  const quantityInput = document.getElementById("quantityInput5");
  const quantityInputstring = quantityInput.value;
  const quantity = parseInt(quantityInputstring); 
  const maltaprice= document.getElementById('tomato-price')
  const maltapricestring = maltaprice.innerText;
  const priceofmalta= parseFloat(maltapricestring);
  const pricetomato = priceofmalta * quantity;
  maltaprice.innerText = pricetomato;

  const quantityInput1 = document.getElementById("quantityInput4");
  const quantityInputstring1 = quantityInput1.value;
  const quantity1 = parseInt(quantityInputstring1); 
  console.log(quantity1);
  const maltaprice1= document.getElementById('malta-price')
  const maltapricestring1 = maltaprice1.innerText;
  const priceofmalta1= parseFloat(maltapricestring1);
  const pricemalta = priceofmalta1 * quantity;

  const quantityInput3 = document.getElementById("quantityInput3");
  const quantityInputstring3= quantityInput3.value;
  const quantity3= parseInt(quantityInputstring3);
  const grapsprice = document.getElementById("milk-price");
  const grapspricestring= grapsprice.innerText;
  const priceofgraps= parseFloat(grapspricestring);
  
  const pricemilk = priceofgraps * quantity3;
  grapsprice.innerText = pricemilk;

  const quantityInput2 = document.getElementById("quantityInput2");
  const quantityInputstring2= quantityInput2.value;
  const quantity2 = parseInt(quantityInputstring2);
  const grapsprice2 = document.getElementById("graps-price");
  const grapspricestring2= grapsprice2.innerText;
  const priceofgraps2= parseFloat(grapspricestring2);
  
  const pricegraps = priceofgraps2 * quantity2;

  const quantityInput4 = document.getElementById("quantityInput1");
  const quantityInputstring4 = quantityInput4.value;
  const quantity4 = parseInt(quantityInputstring4);

  const bananaprice = document.getElementById("banana-price");
  const bananapricestring = bananaprice.innerText;
  const priceofbanana = parseFloat(bananapricestring);
  const pricebanana = priceofbanana * quantity4;

  const orangeprice = document.getElementById("orange-price");
  const quantityInput7 = document.getElementById("quantityInput");

  const orangepricestring = orangeprice.innerText;
  const priceoforange = parseFloat(orangepricestring);

  const quantityInputstring7= quantityInput7.value;
  const quantity7 = parseInt(quantityInputstring7);

  const priceorange = quantity7 * priceoforange;



 
   const total= pricetomato +pricemalta + pricemilk +pricegraps+
     pricebanana +priceorange ;
   
   const totalprice= document.getElementById('totalprices');
   
   totalprice.innerText=total;
  
}

 