
$(".clicca").click(function(){
    user=$('.user').val()
    pass=$('.pass').val()
    console.log(user,pass)
    localStorage.setItem("username", user)
    localStorage.setItem("password", pass)


    location.href= "profilo.html"
})