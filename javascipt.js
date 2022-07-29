window.onload = function(){
    $("#onload").fadeOut(2000);
    $("body").removeClass("hidden");
}

function mostrar(){
    swal({
        title: "Gracias por contactarnos!",
        text: "Te estaremos respondiendo a la brevedad!",
        icon: "success",
        button: false,
        });
}


