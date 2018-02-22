// console.log('sanity check');

var data = [
	{product: "Finger Toothbrush",
	 description: "A helping hand to a nicer smile.",
	 image: '../images/fingerToothbrush.jpg',
	 price: 1.11},
	{product: "Barry Manilow's Greatest Hits Collection Vol 1",
	 description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.",
	 image: '../images/manilow.jpg',
	 price: 39.57},
	{product: "Ramen Oreos",
	 description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.",
	 image: '../images/ramenOreos.jpeg',
	 price: 8.88},
	{product: "Woof Washer 360",
	 description: "Wash your dirty stinky mutt in minutes! Water and dog not included." ,
	 image: '../images/woofWasher.jpg',
	 price: 9.29},
	{product: "Sauna Pants",
	 description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.",
	 image: '../images/saunaPants.jpg',
	 price: 2.33},
	{product: "Hug Me Pillow",
	 description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.",
	 image: '../images/hug-me-pillow.jpg',
	 price: 599.99}
];



//banner area
var headerimg = document.createElement('img');
	headerimg.className = 'headerimg';
	headerimg.innerHTML = '';
	headerimg.src = '../images/cart.svg';
	main.appendChild(headerimg);

var header1 = document.createElement('div');
	header1.className = 'header1';
	header1.innerHTML = 'Shopping Cart';
	main.appendChild(header1);

var banner = document.createElement('div');
	banner.className = 'banner';
	banner.innerHTML = ' ';
	header1.appendChild(banner);

var divider = document.createElement('div');
	divider.className = 'divider';
	divider.innerHTML = ' ';
	main.appendChild(divider);



//items area
for (var i=0; i<data.length; i++){

	var container = document.createElement('div');
		container.className = 'container';
		container.innerHTML = ' ';
		main.appendChild(container);

	var line = document.createElement('div');
		line.className = 'line';
		line.innerHTML = ' ';
		container.appendChild(line);

	var img = document.createElement('img');
		img.className = 'img';
		img.src = data[i].image;
		container.appendChild(img);

	var price = document.createElement('div');
		price.className = 'price';
		price.innerHTML = '$' + data[i].price;
		container.appendChild(price);

	var divi = document.createElement('div');
		divi.className = 'divi';
		divi.innerHTML = ' ';
		container.appendChild(divi);	

	var item = document.createElement('div');
		item.className = 'item';
		item.innerHTML = data[i].product;
		divi.appendChild(item);

	var description = document.createElement('div');
		description.className = 'description';
		description.innerHTML = data[i].description;
		item.appendChild(description);
}



//show descriptions
var itemElem = document.getElementsByClassName('item');
	for (var i=0; i<data.length; i++){
		itemElem[i].addEventListener('click', show);
	}

var middle = document.getElementsByClassName('description');
	for (var i=0; i<data.length; i++){
		middle[i].style.display = 'none';
		
	}

function show(){
	var pElem = this.querySelectorAll('.description')[0];
	if (pElem.style.display === 'none'){
		pElem.style.display = 'block';
	}else{
		pElem.style.display = 'none';
	}
}



//total area
var add = 0;
for ( var i=0; i<data.length;i++){

	add += data[i].price;
}

var line2 = document.createElement('div');
	line2.className = 'line';
	line2.innerHTML = ' ';
	container.appendChild(line2);

var total = document.createElement('div');
	total.className = 'total';
	total.innerHTML = '$' + add;
	line2.appendChild(total);

var subtotal = document.createElement('div');
	subtotal.className = 'subtotal';
	subtotal.innerHTML = 'Subtotal';
	line2.appendChild(subtotal);



//images
