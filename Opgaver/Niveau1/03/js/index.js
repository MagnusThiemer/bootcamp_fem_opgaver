window.addEventListener('DOMContentLoaded', () => {

    function skjulElementViaCssSelector(cssSelector){
        let skjulElement = document.querySelector('.'+cssSelector);
        if(skjulElement){
            skjulElement.style.display = 'none';
        } else {
            console.log('Element does not exist');
        }
    }

    skjulElementViaCssSelector('Article');
    skjulElementViaCssSelector('Gallery');

}); //DOM content loaded slut