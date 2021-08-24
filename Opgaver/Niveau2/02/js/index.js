window.addEventListener('DOMContentLoaded', () => {
/*     const itemElements = document.querySelectorAll('.Item');
    const productGalleryElement = document.querySelector('#productGalleryElement'); */

    let products = [
        {
            navn: 'Blomster',
            pris: 122,
            imgSource: 'assets/blomster.jpg',
            totalPris: 0,
        },
        {
            navn: 'Honning',
            pris: 122,
            imgSource: 'assets/honning.jpg',
            totalPris: 0,
        },
        {
            navn: 'Flamingo',
            pris: 78,
            imgSource: 'assets/flamingo.jpg',
            totalPris: 0,
        }
    ]; 

    const item1IncreaseButtonElement = document.querySelector('#item1IncreaseButton');
    const item1DecreaseButtonElement = document.querySelector('#item1DecreaseButton');
    let item1Total = document.querySelector('#item1Total');
    let item1AntalElement = document.querySelector('#item1Antal');
    
    function increaseDecreaseCount(direction){
        if (direction == 'inc'){
            item1AntalElement.innerHTML++;
            item1Total.innerHTML = item1AntalElement.innerHTML * products[0].pris;
        } else if (direction == 'dec' && item1AntalElement.innerHTML != 0){
            item1AntalElement.innerHTML--;
            item1Total.innerHTML = item1AntalElement.innerHTML * products[0].pris;
        }
    }

    item1DecreaseButtonElement.addEventListener('click', () => increaseDecreaseCount('dec'));
    item1IncreaseButtonElement.addEventListener('click', () => increaseDecreaseCount('inc'));

});