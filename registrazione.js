$(".clicca").click(function(){
    user=$('.user').val()
    nome=$('.nome').val()
    cognome=$('.cognome').val()
    nascita=$('.nascita').val()
    pass=$('.pass').val()


    console.log(user,nome,cognome,nascita,pass)

    $.post({
        url: "http://192.168.1.237:8080/registrati",
        data: JSON.stringify({
            "username": user,
            "nome": nome,
            "cognome": cognome,
            "data_di_nascita": nascita,
            "password": pass
            // Altri dati qui
        }),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(response) {
            // console.log('Success:', response);
            alert(response.messaggio);
            location.href = "https://www.google.com";
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Error:', textStatus, errorThrown);
            alert(textStatus);
        }
    });
    

})