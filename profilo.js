
let username = localStorage.getItem("username")
let password = localStorage.getItem("password")


$.post({
    url: "http://192.168.1.237:8080/autenticati",
    data: JSON.stringify({
        "username": username,
        "password": password
    }),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(response) {
        console.log(response);
        $("#nome").text(response.informazioniUtenteDTO.nome);
        $("#cognome").text(response.informazioniUtenteDTO.cognome);


        $("#data_nascita").text(response.informazioniUtenteDTO.data_nascita.substring(0,10));
        // $(".periodo_effettuato").text(data_nascita);
        // $(".camera_prenotata").text(data_nascita);
        // $(".prezzo_totale_pagato").text(data_nascita);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error:', textStatus, errorThrown);
        alert(textStatus);
    }
});


