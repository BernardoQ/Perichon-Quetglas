window.onload = function(){
    $("#onload").fadeOut();
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


