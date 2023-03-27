// Hämta produktensInformationen från sessionstorage
const produktensInfo = JSON.parse(sessionStorage.getItem('produktInfo'));

if (produktensInfo !== null) {
    // Hämta elementen för chosen-product
    const chosenProductElement = document.querySelector('.chosen-product');
    const cardElement = document.createElement('div');
    cardElement.classList.add('col-md-12', 'mb-4');
    const flexRowElement = document.createElement('div');
    flexRowElement.classList.add('card', 'flex-row');
    const imgElement = document.createElement('img');
    imgElement.classList.add('card-img-top');
    imgElement.src = produktensInfo.image;
    imgElement.alt = 'Image of product';
    const cardBodyElement = document.createElement('div');
    cardBodyElement.classList.add('card-body');
    const titleElement = document.createElement('h5');
    titleElement.classList.add('card-title');
    titleElement.textContent = produktensInfo.title;
    const textElement = document.createElement('p');
    textElement.classList.add('card-text');
    textElement.textContent = produktensInfo.description;
    const textCategoryElement = document.createElement('p');
    textCategoryElement.classList.add('card-text', 'capitalize');
    textCategoryElement.textContent = produktensInfo.category;
    const priceElement = document.createElement('p');
    priceElement.classList.add('price');
    priceElement.textContent = produktensInfo.price;

    // Lägg till elementen till chosen-product och cardet till kolumnen
    // cardBodyElement.appendChild(titleElement);
    // cardBodyElement.appendChild(textElement);
    // cardBodyElement.appendChild(textCategoryElement);
    // cardBodyElement.appendChild(priceElement);
    // flexRowElement.appendChild(imgElement);
    // flexRowElement.appendChild(cardBodyElement);
    // cardElement.appendChild(flexRowElement);
    // chosenProductElement.appendChild(cardElement);

    // Höger sida av formuläret

    // Lägg till produktens information på högra sidan av formuläret
    const productInfoElement = document.querySelector('#order-right-info');
    const productInfoLi1 = document.createElement('li');
    productInfoLi1.classList.add(
        'list-group-item',
        'd-flex',
        'justify-content-between',
        'lh-condensed'
    );
    const productUlLi1Div1 = document.createElement('div');
    const productUlLi1Div1H6 = document.createElement('h6');
    productUlLi1Div1H6.classList.add('my-0');
    productUlLi1Div1H6.textContent = produktensInfo.title;

    // const productSmallPriceElement = document.createElement('small');
    // productSmallPriceElement.classList.add('text-muted');
    // productSmallPriceElement.textContent = produktensInfo.price;

    const productLiPriceElement = document.createElement('li');
    productLiPriceElement.classList.add(
        'list-group-item',
        'd-flex',
        'justify-content-between'
    );
    const productLiPriceElementSpan = document.createElement('span');
    productLiPriceElementSpan.textContent = 'Total (SEK)';
    const productLiPriceElementStrong = document.createElement('strong');
    productLiPriceElementStrong.textContent = produktensInfo.price;

    // Lägg till elementen till productInfoTitleElement
    productInfoLi1.appendChild(productUlLi1Div1);
    productUlLi1Div1.appendChild(productUlLi1Div1H6);
    // productUlLi1Div1.appendChild(productSmallPriceElement);
    productInfoElement.appendChild(productInfoLi1);

    productLiPriceElement.appendChild(productLiPriceElementSpan);
    productLiPriceElement.appendChild(productLiPriceElementStrong);
    productInfoElement.appendChild(productLiPriceElement);
} else {
    console.log('produktensInfo är null');
}
