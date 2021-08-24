window.addEventListener('DOMContentLoaded', () => {
    
    const buttonsElement = document.querySelector('#buttons');
    const highlightColor = 'yellow';

    function highlightButton(event){
        if(event.target.tagName === 'BUTTON'){                              //thekker om der er trykket på en button
            let highlightElement = document.querySelector('.highlight');    //laver en variabel med den button, der har class highlight
    
            if(highlightElement){                                           //slukker for highlight baggrundsfarven 
                highlightElement.style.backgroundColor = '';
                highlightElement.classList.remove('highlight');             //fjerner class highlight
            }
            event.target.classList.add('highlight');                        //tilføjer class highlight til event target
            event.target.style.backgroundColor = highlightColor;            //sætter background color på event target til highlight color
        }
    };

    buttonsElement.addEventListener('click', event => highlightButton(event));

})