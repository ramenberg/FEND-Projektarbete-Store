const productId = sessionStorage.getItem('productId');
$.getJSON('https://fakestoreapi.com/products/' + productId).done(function (
    product
) {
    const chosenProduct = {
        id: product.id,
        title: product.title,
        description: product.description,
        image: product.src,
        price: product.textContent,
        category: product.textContent,
    };
    // order-right
    let productItem = `
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
    $('#order-right-info').html(productItem);

    sessionStorage.setItem(
        'chosenProduct', // nyckel
        JSON.stringify(chosenProduct)
    );
});
