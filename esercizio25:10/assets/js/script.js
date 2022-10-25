function iniziaShooping() {

    let budget = 1000;
    let compere = 0;

    while (budget > 0){
        let prezzi = Math.floor(Math.random()*1000);

        if (prezzi <= budget){
            compere += 1;
            budget -= prezzi;
            
            document.getElementById('mio_budget').innerHTML += '<p> Ammontare della spesa: $' + prezzi + '<br>Nuovo budget aggiornato: $' + budget + '<p>';
        }
        if (budget < 200) {
            document.getElementById('messaggio2').innerHTML = 'hai meno di 200$. Ora basta stai spendendo troppo';
            break;
        }
    }
    document.getElementById('mio_budget').innerHTML += '<p>Hai acquistato:' + compere + 'oggetti </p>';
}

