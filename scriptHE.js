(function() {
    let ham_menu = document.querySelector(".header-tablet");
    let hamburger = document.querySelector("hamburger");
    let x = document.querySelector("close-ham-menu");
    let menu = document.querySelector(".header-tablet-menu");
    let modal = document.querySelector(".modal");
    let close = document.querySelector("modal-container-close");


    var headlines = document.querySelector(".ticker-headlines");
    var links = $("h5");
    var right = ($(window).width() - (headlines.offset().left + headlines.outerWidth()))
    var anim;

    function movingHeads() {


        console.log("we are at moving heads");
        right--;
        if (right <= -links.eq(0).outerWidth()) {
            right += links.eq(0).outerWidth();
            headlines.append(links.eq(0));
            links = headlines.find("h5");
        }
        headlines.css("right", right);
        anim = requestAnimationFrame(movingHeads);
    }

    $(headlines).on("mouseenter", function() {
        cancelAnimationFrame(anim);
    });

    $(headlines).on("mouseleave", function() {
        movingHeads();
    });
    $(document).ready(function() {
        movingHeads();
        // setTimeout(typeWriter, 700);
    });



    // var i = 0;
    // var txt = "הפתרון העולמי לצנרות מים משובשות";
    // var speed = 50;

    // function typeWriter() {
    //     if (i < txt.length) {
    //         document.getElementById("moving-headline").innerHTML += txt.charAt(i);
    //         i++;
    //         setTimeout(typeWriter, speed);
    //     }
    // }
    // end of typing welcome message

    // scroll functions
    window.onscroll = function() { navbarCollapse() };

    function navbarCollapse() {
        if (window.pageYOffset > 30) {
            $("header").addClass("shrink");
            $(".logo-header").addClass("logo-shrink");
        }
        if (window.pageYOffset < 30) {
            $("header").removeClass("shrink");
            $(".logo-header").removeClass("logo-shrink");
        }
        if (window.pageYOffset > 650) {
            $(".challenge__image").addClass("bigger");
        }
        if (window.pageYOffset < 620) {
            $(".challenge__image").removeClass("bigger");
        }
        if (window.pageYOffset > 2100) {
            $(".technology__video").addClass("tech");
        }
        if (window.pageYOffset < 2100) {
            $(".technology__video").removeClass("tech");
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
        $(".modal-container-news").css("visibility", "visible");
    });

    close.addEventListener("click", function() {
        $(".modal-container-news").css("visibility", "hidden");
    });






})();