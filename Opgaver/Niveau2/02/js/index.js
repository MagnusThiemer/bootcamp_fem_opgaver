window.addEventListener('DOMContentLoaded', () => {

    /* produkt array */ 

    let products = [
        {
            navn: 'Blomster',
            pris: 120,
            imgSource: 'assets/blomster.jpg',
            totalPris: 0,
            highlight: false,
        }, {
            navn: 'Honning',
            pris: 4390,
            imgSource: 'assets/honning.jpg',
            totalPris: 0,
            highlight: false,
        }, {
            navn: 'Flamingo',
            pris: 75,
            imgSource: 'assets/flamingo.jpg',
            totalPris: 0,
            highlight: true,
        }, {
            navn: 'Kat',
            pris: 320,
            imgSource: 'assets/kat.jpg',
            totalPris: 0,
            highlight: false,
        }, {
            navn: 'Drinks',
            pris: 13,
            imgSource: 'assets/drinks.jpg',
            totalPris: 0,
            highlight: false,
        }, {
            navn: 'Et stykke natur',
            pris: 100,
            imgSource: 'assets/natur.jpg',
            totalPris: 0,
            highlight: false,
        }, {
            navn: 'Is',
            pris: 90,
            imgSource: 'assets/is.jpg',
            totalPris: 0,
            highlight: false,
        }, {
            navn: 'Stjernehimmel',
            pris: 1,
            imgSource: 'assets/stjernehimmel.jpg',
            totalPris: 0,
            highlight: true,
        }, {
            navn: 'Citroner',
            pris: 3100,
            imgSource: 'assets/citroner.jpg',
            totalPris: 0,
            highlight: false,
        }
    ]; 

    let i = 0; /*tælle variabel til at generere unikt id */

    /* genererer main og section tag i markuppen */
    function createMainElement(){
        let createMainElement = document.createElement('main');
        let newSection = document.createElement('section');

        createMainElement.classList.add('.Main');
        newSection.classList.add('main__product-gallery', 'Product-gallery', 'flex');
        newSection.id = "productGalleryElement";

        createMainElement.appendChild(newSection);
        document.body.appendChild(createMainElement);
    }

    /* generer hvert enkelt card i markuppen */ 
    function createProductElement(productsArray){
        const sectionElement = document.querySelector('#productGalleryElement');

        /* variabler med alle elementer der skal oprettes */
        let createProductGalleryItem = document.createElement('div');
        let createItemImgContainer = document.createElement('div');
        let createImg = document.createElement('img');
        let createName = document.createElement('h3');
        let createPriceP = document.createElement('p');
        let createPriceSpan = document.createElement('span');
        let createNumberP = document.createElement('p');
        let createNumberSpan = document.createElement('span');
        let createButtonsContainer = document.createElement('div');
        let createButtonDecrease = document.createElement('button');
        let createButtonIncrease = document.createElement('button');
        let createTotalPriceP = document.createElement('p');
        let createTotalPriceSpan = document.createElement('span');

        /* indhold og append alle variabler */
        createProductGalleryItem.classList.add('product-gallery__item', 'Item');
        if(productsArray.highlight){                                /* add class highlight hvis highlight er sat til true */
            createProductGalleryItem.classList.add('item_highlight');
        }
        sectionElement.appendChild(createProductGalleryItem);

        createItemImgContainer.classList.add('item__img-container');
        createProductGalleryItem.appendChild(createItemImgContainer);

        createImg.classList.add('item__img');
        createImg.src = productsArray.imgSource;
        createItemImgContainer.appendChild(createImg);

        createName.classList.add('item__navn');
        createName.innerHTML = productsArray.navn;
        createProductGalleryItem.appendChild(createName);

        createPriceP.classList.add('item__pris');
        createProductGalleryItem.appendChild(createPriceP);
        createPriceP.appendChild(createPriceSpan);
        createPriceSpan.innerHTML = productsArray.pris;
        createPriceP.innerHTML = createPriceSpan.innerHTML + ',-';

        createNumberSpan.classList.add('item__antal');
        createNumberSpan.id = 'antalElement' + i;
        createNumberSpan.innerHTML = 0;
        createNumberP.appendChild(createNumberSpan);
        createProductGalleryItem.appendChild(createNumberP);

        createButtonsContainer.classList.add('item__buttons-container', 'flex');
        createProductGalleryItem.appendChild(createButtonsContainer);

        createButtonDecrease.classList.add('item__button');
        createButtonDecrease.innerHTML = '-';
        createButtonDecrease.id = 'decreaseButtonElement' + i;
        createButtonIncrease.classList.add('item__button');
        createButtonIncrease.innerHTML = '+';
        createButtonIncrease.id = 'increaseButtonElement' + i;
        createProductGalleryItem.appendChild(createButtonDecrease);
        createProductGalleryItem.appendChild(createButtonIncrease);

        createTotalPriceSpan.classList.add('item__total');
        createTotalPriceSpan.innerHTML = productsArray.totalPris;
        createTotalPriceSpan.id = 'totalPrisElement' + i;
        createTotalPriceP.innerHTML = 'Total: ';
        createTotalPriceP.appendChild(createTotalPriceSpan);
        createTotalPriceP.innerHTML += ',-';
        createProductGalleryItem.appendChild(createTotalPriceP);
        
        /* funktion der tilføjer click events til buttons i hvert gallery element */ 

        function addButtonFunctionality(){ 
            let increaseButton = document.querySelector('#increaseButtonElement' + i);
            let decreaseButton = document.querySelector('#decreaseButtonElement' + i);
            let antal = document.querySelector('#antalElement' + i);
            let total = document.querySelector('#totalPrisElement' + i);
    
            function increaseDecreaseCount(direction){
                    if (direction == 'inc'){
                        antal.innerHTML++;
                        total.innerHTML = antal.innerHTML * productsArray.pris;
                    } else if (direction == 'dec' && antal.innerHTML != 0){
                        antal.innerHTML--;
                        total.innerHTML = antal.innerHTML * productsArray.pris;
                    }
                };

            increaseButton.addEventListener('click', () => increaseDecreaseCount('inc'));
            decreaseButton.addEventListener('click', () => increaseDecreaseCount('dec'));
            i++; /* tælle variabel til at generere id med */ 
        };

        addButtonFunctionality(); /* kører funktionen i forEach loopet */
    }

    createMainElement();
    products.forEach(product => createProductElement(product));

});