// console.log('sanity');
var banElem = document.getElementById('banner');
var banDiv = document.createElement('div');
banDiv.className = 'title';
banDiv.innerHTML = 'Shopping Cart';
banElem.appendChild(banDiv);

var products = [
{product: "Finger Toothbrush",
description: "A helping hand to a nicer smile.",
price: 1.11}, 
{product: "Barry Manilow's Greatest Hits Collection Vol 1",
description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.",
price: 39.57}, 
{product: "Ramen Oreos",
description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", 
price: 8.88}, 
{product: "Woof Washer 360", 
description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , 
price: 9.29}, 
{product: "Sauna Pants", 
description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", 
price: 2.33}, 
{product: "Hug Me Pillow", 
description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", 
price: 599.99}
];

var itemElem = document.getElementById('items');

	for (var i=0; i<products.length; i++){
		
		var lineDiv = document.createElement('div');
		lineDiv.className = 'line';
		itemElem.appendChild(lineDiv);
		
		var prodDiv = document.createElement('div');
		prodDiv.className = 'prod';
		prodDiv.innerHTML = products[i].product;
		lineDiv.appendChild(prodDiv);

		var descDiv = document.createElement('div');
		descDiv.className = 'desc';
		descDiv.innerHTML = products[i].description;
		prodDiv.appendChild(descDiv);

		var pricDiv = document.createElement('div');
		pricDiv.className = 'pric';
		pricDiv.innerHTML = products[i].price;
		descDiv.appendChild(pricDiv);
	}

var prodElem = document.getElementsByClassName("prod");

for(var i = 0; i<prodElem.length; i++){
  prodElem[i].addEventListener("click", showProduct);
  }

function showProduct(){
  //console.log(this.innerHTML)
  var descrip = this.querySelectorAll(".desc")[0];
  if(descrip.style.display === "none"){
    descrip.style.display = "block";
  }else{
    descrip.style.display = "none";
  }
}

var totalElem = document.getElementById('total');

var lineDiv2 = document.createElement('div');
lineDiv2.className = 'line';
total.appendChild(lineDiv2);
		
var totDiv = document.createElement('div');
totDiv.className = 'tots';
totDiv.innerHTML = 'Subtotal';
lineDiv2.appendChild(totDiv);

	var subtot = 0;
function addUp(num){
	for (var i=0; i<products.length; i++){
		subtot += products[i].price;
		// console.log(subtot);
	}
	return subtot;
}
addUp()

var subDiv = document.createElement('div');
subDiv.className = 'subtots';
subDiv.innerHTML = subtot;
totDiv.appendChild(subDiv);


var finTooth = document.getElementsByClassName('line')[0];
// console.log(finTooth);
var imgFinger = document.createElement("img");
imgFinger.className = 'picture';
 
imgFinger.src = "../images/FingerToothbrush.jpg";
finTooth.appendChild(imgFinger);

var barry = document.getElementsByClassName('line')[1];
// console.log(finTooth);
var imgBarry = document.createElement("img");
imgBarry.className = 'picture';
 
imgBarry.src = "../images/BarryManilow.jpg";
barry.appendChild(imgBarry);

var ramen = document.getElementsByClassName('line')[2];
// console.log(finTooth);
var imgRamen = document.createElement("img");
imgRamen.className = 'picture';
 
imgRamen.src = "../images/ramenOreos.jpeg";
ramen.appendChild(imgRamen);

var woof = document.getElementsByClassName('line')[3];
// console.log(finTooth);
var imgWoof = document.createElement("img");
imgWoof.className = 'picture';
 
imgWoof.src = "../images/woofWasher.gif";
woof.appendChild(imgWoof);

var sauna = document.getElementsByClassName('line')[4];
// console.log(finTooth);
var imgSauna = document.createElement("img");
imgSauna.className = 'picture';
 
imgSauna.src = "../images/saunaPants.jpg";
sauna.appendChild(imgSauna);

var pillow = document.getElementsByClassName('line')[5];
// console.log(finTooth);
var imgPillow = document.createElement("img");
imgPillow.className = 'picture';
 
imgPillow.src = "../images/hugmepillow.jpg";
pillow.appendChild(imgPillow);


