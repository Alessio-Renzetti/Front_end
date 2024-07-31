$(".clicca").click(function(){
    user=$('.user').val()
    nome=$('.nome').val()
    cognome=$('.cognome').val()
    nascita=$('.nascita').val()
    pass=$('.pass').val()


    console.log(user,nome,cognome,nascita,pass)

    $.post(
        "http://192.168.1.237:8080/registrati",
        {
            username: user,
            nome: nome,
            cognome: cognome,
            data_di_nascita: nascita,
            password: pass
        },
        function(data){
            console.log(data)
    });
})