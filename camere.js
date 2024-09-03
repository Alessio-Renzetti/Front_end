$("#camerainfo").hide()
$("#camera2info").hide()
$("#camera3info").hide()

$(".clicca").click(function(){
    $(".clicca").css(`color`,`gray`)
    $("#cameree").hide()
    $("#camerainfo").show()
})

$(".clicca2").click(function(){
    $(".clicca2").css(`color`,`grey`)
    $("#camerainfo").hide()
    $("#cameree").show()
})

$(".clicca3").click(function(){
    $(".clicca3").css(`color`,`grey`)
    $("#cameree").hide()
    $("#camera2info").show()
})

$(".clicca4").click(function(){
    $(".clicca4").css(`color`,`grey`)
    $("#camera2info").hide()
    $("#cameree").show()
})

$(".clicca5").click(function(){
    $(".clicca5").css(`color`,`grey`)
    $("#camera3info").hide()
    $("#cameree").show()
})

$(".clicca6").click(function(){
    $(".clicca6").css(`color`,`grey`)
    $("#cameree").hide()
    $("#camera3info").show()
})

// $(".button").hover(function(){
 // (".button").css(`color`,`red`)
// })