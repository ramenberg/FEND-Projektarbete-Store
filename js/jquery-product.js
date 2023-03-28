const productId = sessionStorage.getItem('productId');
$.getJSON('https://fakestoreapi.com/products/' + productId).done(function (
	product
) {
	const chosenProduct = {
		id: product.id,
		title: product.title,
		price: product.price,
		description: product.description,
		category: product.category,
		image: product.image,
		rating: product.rating,
	};
	if ($('#order-right-info').length) {
		// order-right på order.html
		let productItemMinimal = `
        <li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
            <h6 class="my-0">${product.title}</h6>
        </div>
        <span class="text-muted invisible">${product.price}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
            <span>Totalt (SEK)</span>
            <strong>${product.price}</strong>
        </li>
        `;

		$('#order-right-info').html(productItemMinimal);
	}
	// order-right på confirmation.html
	else if ($('#confirmation-order-right-info').length) {
		let productItemAllInfo = `
        <li class="list-group-item">
            <div class="d-flex align-items-start">
                <div class="flex-shrink-0 mr-3 product-image">
                    <img src="${product.image}" alt="${product.title}" width="100" height="100" />
                </div>
                <div class="ms-3">
                    <h6 class="my-0">${product.title}</h6>
                    <p class="my-0">${product.description}</p>
                    <div class="d-flex justify-content-between my-0">
                    <p class="my-0">${product.rating.rate}</p>
                    <p class="my-0">${product.rating.count}</p>
                    </div>
                </div>
                <span class="text-muted ms-auto">${product.price}</span>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between">
            <div class="capitalize">Kategori: ${product.category}</div>
            <div>Antal: 1</div>
        </li>
        <li class="list-group-item d-flex justify-content-between">
            <span>Totalt (SEK)</span>
            <strong>${product.price}</strong>
        </li>

    
        `;
		$('#confirmation-order-right-info').html(productItemAllInfo);
	} else {
		console.log('Ingen produkt vald');
	}

	sessionStorage.setItem(
		'chosenProduct', // nyckel
		JSON.stringify(chosenProduct)
	);
});
