window.addEventListener('DOMContentLoaded', () => {
    
    function skjulElementViaCssSelector(cssSelector){
        let skjulHTMLElement = document.querySelector('.'+cssSelector);
        skjulElement(skjulHTMLElement);
    }
    
    function skjulElement(element){
        if(element){
            element.style.display = 'none';
        } else {
            console.log('Element does not exist');
        }
    }

    skjulElementViaCssSelector('Article');
    skjulElementViaCssSelector('Gallery');

}); //DOM content loaded slut