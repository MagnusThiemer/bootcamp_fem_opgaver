window.addEventListener('DOMContentLoaded', () => {

    const buttonElement = document.querySelector('#my-button');
    let colorOne = '#EE49F2';
    let colorTwo = '#DD1192';
    let clicked = false;

    buttonElement.addEventListener('click', () => {
        if (clicked){
            buttonElement.style.backgroundColor = colorOne;
            clicked = false;
        } else {
            buttonElement.style.backgroundColor = colorTwo;
            clicked = true;
        }
    });

}); //DOM content loaded slut