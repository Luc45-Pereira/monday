function enviar() {


    /*Variáveis*/
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var empresa = document.getElementById('empresa').value;
    var mensagem = document.getElementById('mensagem').value;

    /*Monday*/
    let query5 = 'mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:2384570982, item_name:$myItemName, column_values:$columnVals) { id } }';
    let vars = {
        "myItemName": (nome),
        "columnVals": JSON.stringify({
            "status2": { "label": "" },
            "email": { "e_mail": (email), "text": (email) },
            "phone_1": (telefone),
            "texto5": (empresa),
            "texto4": (mensagem)

        })
    };

    /*Conexão Monday*/

    fetch("https://api.monday.com/v2", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjEyOTM4NTczOSwidWlkIjoyNTEyNDg1MCwiaWFkIjoiMjAyMS0xMC0xOVQxNTo0NzozOS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTAwMTUxNDEsInJnbiI6InVzZTEifQ.iCUv9u7ujU366K2g7PIEnWdglCjnDnI4yJx0fPUXpqc'
            },
            body: JSON.stringify({
                'query': query5,
                'variables': JSON.stringify(vars)
            })
        })
        .then(res => res.json())
        .then(res => console.log(JSON.stringify(res, null, 2)));

}