(function() {
    var ham_menu = document.querySelector(".header-tablet");
    var hamburger = document.querySelector(".hamburger");
    var x = document.querySelector(".close-ham-menu");
    var menu = document.querySelector(".header-tablet-menu");
    var modal = document.querySelector(".modal");
    var close = document.getElementById("modal-container-close");
    // typing welcome message

    var headlines = $(".headlines");
    var links = $("h5");
    var left = headlines.offset().left;
    var anim;
    // links.ep(0).outerWidth();
    function movingHeads() {
        left--;

        if (left <= -links.eq(0).outerWidth()) {
            left += links.eq(0).outerWidth();
            headlines.append(links.eq(0));
            links = headlines.find("h5");
        }
        headlines.css("left", left);
        anim = requestAnimationFrame(movingHeads);
    }

    $(headlines).on("mouseenter", function() {
        console.log("event is on");
        cancelAnimationFrame(anim);
    });

    $(headlines).on("mouseleave", function() {
        movingHeads();
    });

    $(document).ready(function() {
        setTimeout(typeWriter, 700);
        movingHeads();
    });

    var i = 0;
    var txt = "World's solution for damaged water pipes";
    var speed = 50;

    function typeWriter() {
        if (i < txt.length) {
            document.querySelector(".moving-headline").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    // end of typing welcome message

    // scroll functions
    window.onscroll = function() {
        navbarCollapse();
    };

    function navbarCollapse() {
        console.log(window.pageYOffset);
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
    }

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