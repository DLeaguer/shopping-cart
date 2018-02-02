// console.log('sanity');

var headerId = document.getElementById('banner');

//shopping cart image
var imgCart = document.createElement('img');
imgCart.className = 'img';
imgCart.src = '../images/cart.svg';
headerId.appendChild(imgCart);

//title after shopping cart image
var bannerDiv = document.createElement('div');
bannerDiv.className = 'banner';
bannerDiv.innerHTML = 'Shopping Cart';
headerId.appendChild(bannerDiv);

//data from README.md
var products = [{image: "../images/FingerToothbrush.jpg", product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {image: "../images/BarryManilow.jpg", product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {image: "../images/ramenOreos.jpeg", product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {image: "../images/woofWasher.gif", product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {image: "../images/saunaPants.jpg", product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {image: "../images/hugmepillow.jpg", product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];

//make area for line, image, product, description, price
var mainId = document.getElementById('main');

var itemDiv = document.createElement('div');
main.appendChild(itemDiv);

for (var i=0; i<products.length; i++){

	var lineDiv = document.createElement('div');
	lineDiv.className = 'line';
	itemDiv.appendChild(lineDiv);

	var imgDiv = document.createElement('img');
	imgDiv.className = 'image';
	imgDiv.src	= products[i].image;
	itemDiv.appendChild(imgDiv);

	var prodDiv = document.createElement('div');
	prodDiv.className = 'prod';
	prodDiv.innerHTML = products[i].product;
	itemDiv.appendChild(prodDiv);

	var descDiv = document.createElement('div');
	descDiv.className = 'desc';
	descDiv.innerHTML = products[i].description;
	prodDiv.appendChild(descDiv);

	var priceDiv = document.createElement('div');
	priceDiv.className = 'price';
	priceDiv.innerHTML = '$' + products[i].price;
	lineDiv.appendChild(priceDiv);

}

//show hide description
var getProd = document.getElementsByClassName('prod');
for (var i=0; i<getProd.length; i++){
	getProd[i].addEventListener('click', showDesc);
}
function showDesc(){
	var getDesc = this.querySelectorAll('.desc')[0];
	if (getDesc.style.display === 'none'){
		getDesc.style.display = 'block';
	}else{
		getDesc.style.display = 'none';
	}
}

//make subtotal area
var lineDiv = document.createElement('div');
lineDiv.className = 'line';
itemDiv.insertBefore(lineDiv, subtotDiv);

var subtotDiv = document.createElement('div');
subtotDiv.className = 'prod';
subtotDiv.innerHTML = 'Subtotal';
itemDiv.appendChild(subtotDiv);

var totDiv = document.createElement('div');
totDiv.className = 'total';
// totDiv.innerHTML = 0; //not needed
lineDiv.appendChild(totDiv);

//sum up totals
var totAmt = 0;
for (var i=0; i<products.length; i++){
	totAmt += products[i].price;
	// console.log(totAmt);
}
totDiv.innerHTML = '$' + totAmt;