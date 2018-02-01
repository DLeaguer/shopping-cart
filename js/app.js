// console.log('sanity');

var headerId = document.getElementById('top');

var imgCart = document.createElement('img');
imgCart.className = 'imag';
imgCart.src = '../images/cart.svg';
headerId.appendChild(imgCart);


var products = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];

var mainId = document.getElementById('main');

var itemDiv = document.createElement('div');
main.appendChild(itemDiv);

for (var i=0; i<products.length; i++){

	var lineDiv = document.createElement('div');
	lineDiv.className = 'line';
	itemDiv.appendChild(lineDiv);

	var prodDiv = document.createElement('div');
	prodDiv.className = 'prod';
	prodDiv.innerHTML = products[i].product;
	itemDiv.appendChild(prodDiv);

	var descDiv = document.createElement('div');
	descDiv.className = 'desc';
	descDiv.innerHTML = products[i].description;
	itemDiv.appendChild(descDiv);

	var priceDiv = document.createElement('div');
	priceDiv.className = 'pric';
	priceDiv.innerHTML = products[i].price;
	itemDiv.appendChild(priceDiv);

	var totDiv = document.createElement('div');
	totDiv.className = 'tots';
	itemDiv.appendChild(totDiv);
}
