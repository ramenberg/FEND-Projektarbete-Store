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
    sessionStorage.setItem(
        'chosenProduct', // nyckel
        JSON.stringify(chosenProduct)
    );
});
