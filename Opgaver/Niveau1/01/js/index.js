window.addEventListener('DOMContentLoaded', () => {

    const buttonElement = document.querySelector('#my-button');
    let colorOne = '#EE49F2';
    let colorTwo = '#DD1192';

    let colorsArray = [colorOne, colorTwo];

    buttonElement.addEventListener('click', () => {
            buttonElement.style.backgroundColor = colorsArray[0];
            colorsArray.reverse();
    });

}); //DOM content loaded slut