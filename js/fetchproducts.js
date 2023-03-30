// Hämta elementet med id "produkter"
const produkterElement = document.getElementById('produkter');

// Hämta produkter från API:et
fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((produkter) => {
        // Skapa ett card för varje produkt
        produkter.forEach((produkt) => {
            // Skapa elementen för cardet
            const colElement = document.createElement('div');
            colElement.classList.add('col-md-3', 'mb-4');
            const cardElement = document.createElement('div');
            cardElement.classList.add('card', 'valdprodukt');
            const imgElement = document.createElement('img');
            imgElement.classList.add('card-img-top');
            imgElement.src = produkt.image;
            imgElement.alt = 'Image of product';
            const cardBodyElement = document.createElement('div');
            cardBodyElement.classList.add('card-body');
            const titleElement = document.createElement('h5');
            titleElement.classList.add('card-title');
            titleElement.textContent = produkt.title;
            const textElement = document.createElement('p');
            textElement.classList.add('card-text');
            textElement.textContent = produkt.description;
            const categoryElement = document.createElement('p');
            categoryElement.classList.add('card-text');
            categoryElement.textContent = produkt.category;
            const priceElement = document.createElement('p');
            priceElement.classList.add('card-text');
            priceElement.textContent = produkt.price;

            // Skapa en knapp för att beställa produkten
            const btnElement = document.createElement('a');
            btnElement.classList.add('btn', 'btn-primary');
            btnElement.href = 'order.html?=' + produkt.id;
            btnElement.textContent = 'Beställ';
            btnElement.addEventListener('click', (event) => {
                event.preventDefault();

                // // Hämta informationen om produkten
                // const cardElement = event.target.parentElement.parentElement;
                // const imgElement = cardElement.querySelector('img');
                // const titleElement = cardElement.querySelector('h5');
                // const textElement = cardElement.querySelector('p');

                // Lagra produktinformationen i sessionStorage
                const produktInfo = {
                    id: produkt.id,
                    title: titleElement.textContent,
                    description: textElement.textContent,
                    image: imgElement.src,
                    price: priceElement.textContent,
                    category: categoryElement.textContent,
                };
                sessionStorage.setItem(
                    'produktInfo', // nyckel
                    JSON.stringify(produktInfo)
                );

                // Omdirigera till order.html
                window.location.href = 'order.html?=' + produkt.id;
            });

            // Lägg till elementen till cardet och cardet till kolumnen
            cardBodyElement.appendChild(titleElement);
            cardBodyElement.appendChild(textElement);
            cardBodyElement.appendChild(categoryElement);
            cardBodyElement.appendChild(priceElement);
            cardBodyElement.appendChild(btnElement);
            cardElement.appendChild(imgElement);
            cardElement.appendChild(cardBodyElement);
            colElement.appendChild(cardElement);

            // Lägg till kolumnen till produkter-elementet
            produkterElement.appendChild(colElement);
        });
    })
    .catch((error) => console.error(error));
