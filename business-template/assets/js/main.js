(function () {
    "use strict";

    /*=====================================
    Sticky Navbar
    ======================================= */
    window.onscroll = function () {
        var headerNavbar = document.querySelector(".navbar-area");
        var sticky = headerNavbar.offsetTop;

        if (window.pageYOffset > sticky) {
            headerNavbar.classList.add("sticky");
        } else {
            headerNavbar.classList.remove("sticky");
        }

        // Show or hide the scroll-top button
        var backToTop = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTop.style.display = "flex";
        } else {
            backToTop.style.display = "none";
        }
    };

    /*=====================================
    Section Menu Active
    ======================================= */
    function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        for (var i = 0; i < sections.length; i++) {
            var currLink = sections[i];
            var val = currLink.getAttribute('href');
            var refElement = document.querySelector(val);
            var scrollTopMinus = scrollPos + 73;
            if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
                document.querySelector('.page-scroll').classList.remove('active');
                currLink.classList.add('active');
            } else {
                currLink.classList.remove('active');
            }
        }
    };

    window.document.addEventListener('scroll', onScroll);

    /*=====================================
    Smooth Scroll for Menu Links
    ======================================= */
    var pageLinks = document.querySelectorAll('.page-scroll');

    pageLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }
        });
    });


    "use strict";

}) ();
