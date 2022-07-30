
//LOADER PAGE FUNCTION
window.onload = function(){
    $('#onload').fadeOut(1500);
    setTimeout(function() {
        $('#body').removeClass('hidden');
    }, 1400);
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        } else {
        reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


//CONTACT FORM FUNCTION

function mostrar(){
    swal({
        title: "Gracias por contactarnos!",
        text: "Te estaremos respondiendo a la brevedad!",
        icon: "success",
        button: false,
        });
}

/*function mostrar(){
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;  

    if (name.trim() != "" && lastName.trim() != "" && email.trim() != "" && subject.trim() != "" && message.trim() != ""){
        swal({
            title: "Gracias por contactarnos!",
            text: "Te estaremos respondiendo a la brevedad!",
            icon: "success",
            button: false,
            });
    }
}*/




