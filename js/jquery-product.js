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
            <div class="d-flex justify-content-between">
                <div class="ms-3"><strong>Produkt</strong></div>
                <div class="ms-3"><strong>Antal</strong></div>
            </div>
        </li>
        <li class="list-group-item">
            <div class="d-flex align-items-start">
                <div class="flex-shrink-0 mr-3 product-image">
                    <img src="${product.image}" alt="${product.title}" class="product-image-small" width="100" height="100" />
                </div>
                <div class="ms-3">
                    <h6 class="mb-2">${product.title}</h6>
                    <p class="my-0">${product.description}</p>
                    <div class="d-flex justify-content-between my-2">
                    <p class="my-0">Betyg: ${product.rating.rate}</p>
                    <p class="my-0">Antal röster: ${product.rating.count}</p>
                    </div>
                    <small class="capitalize">Kategori: ${product.category}</small>
                </div>
                <div class="ms-auto product-number">
                    <div class="d-flex">
                        <p class="my-0">1</p>
                    </div>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between">
            <strong>Summa beställning: </strong>
            <strong>${product.price} kr</strong>
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
