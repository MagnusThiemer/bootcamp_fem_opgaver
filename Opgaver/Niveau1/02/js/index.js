window.addEventListener('DOMContentLoaded', () => {

    let resultat = beregnForhold(4, 3);
    let resultat2 = beregnForhold2(54, 0);

    function beregnForhold(a, b){
        return a / b;
    };

    function beregnForhold2(a, b){
        if(b === 0){
            return null;
        } else {
            return a / b;
        }
    };

    console.log(resultat);
    console.log(resultat2);

}); //DOM content loaded slut