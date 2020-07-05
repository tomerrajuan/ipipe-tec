(function() {
    var ham_menu = document.getElementById("hamburger-menu");
    var hamburger = document.getElementById("hamburger");
    var x = document.getElementById("close-ham-menu");
    var menu = document.getElementById("menu");
    var modal = document.querySelector(".modal");
    var close = document.getElementById("modal-container-close");
    // typing welcome message
    $(document).ready(function() {
        setTimeout(typeWriter, 700);
    });

    var i = 0;
    var txt = "הפתרון העולמי לצנרות מים משובשות";
    var speed = 50;

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("moving-headline").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    // end of typing welcome message

    // scroll functions
    window.onscroll = function() { navbarCollapse()};
    function navbarCollapse() {
        console.log(window.pageYOffset)
        if (window.pageYOffset > 30) {
            $("header").addClass("shrink");
            $("#logo_header").addClass("logo-shrink");
        } if(window.pageYOffset < 30){
            $("header").removeClass("shrink");
            $("#logo_header").removeClass("logo-shrink");
        } if(window.pageYOffset > 700){
            $("#submarine_small").addClass("bigger");
        } if(window.pageYOffset < 680){
            $("#submarine_small").removeClass("bigger");
        } if(window.pageYOffset > 3000){
            $("#data").addClass("tech");
        } if (window.pageYOffset < 3000){
            $("#data").removeClass("tech");
        }
    };

    hamburger.addEventListener("click", function() {
        ham_menu.classList.add("on");
        hamburger.classList.add("off");
    });
    x.addEventListener("click", function() {
        ham_menu.classList.remove("on");
        hamburger.classList.remove("off");
    });
    menu.addEventListener("click", function(evt) {
        evt.stopPropagation();
    });
    ham_menu.addEventListener("click", function() {
        ham_menu.classList.remove("on");
    });

    modal.addEventListener("click", function() {
    console.log("we are here");
        $(".modal-container-news").css("visibility","visible");
    });

    close.addEventListener("click", function() {
        $(".modal-container-news").css("visibility","hidden");
        });






})();