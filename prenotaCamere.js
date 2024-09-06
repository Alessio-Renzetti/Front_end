$(".clicca").click(function(){
    arrivo=$('#arrivo').val();
    partenza=$('#partenza').val();

    console.log(arrivo,partenza)

    if(arrivo>partenza){
        alert('ERROR: inserisci una data valida')
    }
    else(
        
        $.post({
            url: "http://192.168.1.237:8080/prenotazioni/verifica",
            data: JSON.stringify({
                "arrivo": arrivo,
                "partenza": partenza
    
            }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success :function(response){
                console.log(response)
            }
        })
    )

        
   

})
