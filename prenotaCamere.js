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
                html("Ecco le camere disponibili: ");
                $("body").append(elemento)
                
                
                for(x of response){
                    let camera=$("<div>").
                    addClass("tipo_camera").
                    html(`Camera: ${x['nome_camera']}<br>
                        Numero persone: ${x['n_max_posti']}<br>
                        Prezzo: ${x['prezzi_tipo_camera']}`);


                    elemento.append(camera);

                    let aggiungi=$('<button>').
                    addClass("bottoncino")

                    $("camera").append(aggiungi)
                }
                
                
                
            }
        })
    )

        
   

})
