$(".clicca").click(function(){
    arrivo=$('#arrivo').val();
    partenza=$('#partenza').val();

    // console.log(arrivo,partenza)
    

    if(arrivo>partenza){
        alert('ERROR: inserisci una data valida')
    }
    else(
        
        $.post({
            url: "http://192.168.1.237:8080/prenotazioni/verifica",
            data: JSON.stringify({
                "data_inizio": arrivo,
                "data_fine": partenza
    
            }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success :function(response){
              $(".prenota").remove();
                console.log(response)


                let elemento=$("<div>").
                addClass("disponibilita").
                text("Ecco le camere disponibili");
                $("body").append(elemento)

                for(x of response){
                    for(i in x){
                        
                        console.log(x)
                        console.log(i.values())
                    }

                }
                
                
            }
        })
    )

        
   

})
