document.querySelectorAll(".navbar > div > .button").forEach(function (bottone) {
    bottone.addEventListener("click", function(){
        let url_navigazione = this.getAttribute("url_navigazione");
        if (url_navigazione != null) {
            window.location.href = url_navigazione;
        }
    });
});