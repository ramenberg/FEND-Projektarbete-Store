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
    const priceElement = document.createElement('p');
    priceElement.classList.add('price');
    priceElement.textContent = produktensInfo.price;

    // Lägg till elementen till chosen-product och cardet till kolumnen
    cardBodyElement.appendChild(titleElement);
    cardBodyElement.appendChild(textElement);
    cardBodyElement.appendChild(priceElement);
    flexRowElement.appendChild(imgElement);
    flexRowElement.appendChild(cardBodyElement);
    cardElement.appendChild(flexRowElement);
    chosenProductElement.appendChild(cardElement);

    // Lägg till produktens information på högra sidan av formuläret
    const productInfoElement = document.querySelector('.right-order-info');
    const productInfoTitleElement = document.createElement('h4');
    productInfoTitleElement.classList.add(
        'd-flex justify-content-between align-items-center mb-3'
    );
    const productInfoTitleSpanElement = document.createElement('span');
    productInfoTitleSpanElement.classList.add('text-muted');
    productInfoTitleSpanElement.textContent = 'Din beställning';

    const productInfoUL = document.createElement('ul');
    productInfoUL.classList.add('list-group mb-3');
    const productInfoLI1 = document.createElement('li');
    productInfoLI1.classList.add(
        'list-group-item d-flex justify-content-between lh-condensed'
    );
    const productUlLi1Div1 = document.createElement('div');
    const productUlLi1Div1H6 = document.createElement('h6');
    productUlLi1Div1H6.classList.add('my-0');
    productUlLi1Div1H6.textContent = produktensInfo.title;
    const smallDescriptionElement = document.createElement('small');
    smallDescriptionElement.classList.add('text-muted');
    smallDescriptionElement.textContent = produktensInfo.description;

    const productSmallPriceElement = document.createElement('small');
    productSmallPriceElement.classList.add('text-muted');
    productSmallPriceElement.textContent = produktensInfo.price;
    // Lägg til elementen till productInfoTitleElement
} else {
    console.log('produktensInfo är null');
}
