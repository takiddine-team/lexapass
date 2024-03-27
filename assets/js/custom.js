// const heroImage = document.getElementById('hero-mobile-watermark');

// if (heroImage !== null) {

//     const scrollPosition = window.scrollY;

//     if (scrollPosition == 0) {
//         heroImage.classList.add('fixed-mobile-watermark');
//     }

//     // Add a scroll event listener to the window object
//     window.addEventListener('scroll', () => {
//         // Get the current scroll position
//         const scrollPosition = window.scrollY;

//         if (scrollPosition < 1600) {
//             heroImage.classList.add('fixed-mobile-watermark');
//         }

//         if (scrollPosition >= 1600) {
//             heroImage.classList.remove('fixed-mobile-watermark');
//         }
//     });

// }




// -----Country Code Selection
$("#mobile_code").intlTelInput({
    initialCountry: "auto",
    geoIpLookup: callback => {
        fetch("/code.php")
            .then(res => res.json())
            .then(data => callback(data.countryCode))
            .catch(() => callback("ae"));
    },
    separateDialCode: true,
    excludeCountries: ["eh"]
});

// $(document).ready(function() {
//     const config = {
//         search: true, // Toggle search feature. Default: false
//         creatable: false, // Creatable selection. Default: false
//         clearable: false, // Clearable selection. Default: false
//         maxHeight: '200px', // Max height for showing scrollbar. Default: 360px
//         size: '', // Can be "sm" or "lg". Default ''
//     }
//     dselect(document.querySelector('#selectCountry'), config)
// });


// /******* */

// $('.btn-youtube').magnificPopup({ type: 'iframe' });

// /******* */
// $(document).ready(function() {
//     $('.owl-carousel.ltr').owlCarousel({
//         loop: true,
//         margin: 0,
//         nav: true,
//         dots: true,
//         autoplay: true,
//         autoPlaySpeed: 5000,
//         autoPlayTimeout: 5000,
//         autoplayHoverPause: true,
//         touchDrag: true,
//         items: 1,
//         slideBy: 1,
//     })
// });

// $(document).ready(function() {
//     $('.owl-carousel.rtl').owlCarousel({
//         rtl: true,
//         loop: true,
//         margin: 0,
//         nav: true,
//         dots: true,
//         autoplay: true,
//         autoPlaySpeed: 5000,
//         autoPlayTimeout: 5000,
//         autoplayHoverPause: true,
//         touchDrag: true,
//         items: 1,
//         slideBy: 1,
//     })
// });


// /****** */
if ($('.numbers').length > 0) {
    var a = 0;
    $(window).scroll(function() {

        var oTop = $('.numbers').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.js-count-up').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(addCommas(Math.floor(this.countNum)));
                        },
                        complete: function() {
                            $this.text(addCommas(this.countNum));
                        }

                    });
            });
            a = 1;
        }

    });
}

function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}


// /*********************************************/


// var b = 0;
// $(window).scroll(function() {

//     var oTop = $('.js-pathWrap').offset().top - window.innerHeight;
//     if (b == 0 && $(window).scrollTop() > oTop) {
//         $("path.svgAnimation").addClass("is-animated");
//     } else {
//         $("path.svgAnimation").removeClass("is-animated");
//     }

// });



// /***********************************/

// jQuery('.common-right-box .icon-box').on('click', function() {
//     jQuery(this).addClass('active').siblings().removeClass('active');
// });
// jQuery('.common-right-box .icon-box').on('click', function() {
//     jQuery(this).addClass("active");
// });
// jQuery('.common-right-box .icon-box').on('mouseleave', function() {
//     jQuery(this).removeClass("active");
// });
// jQuery('.common-right-box .icon-box').on('click', function() {
//     jQuery(this).addClass("active");
// });
// jQuery('.common-right-box .icon-box').on('mouseleave', function() {
//     jQuery(this).removeClass("active");
// });


/********************************/


$(document).ready(function() {
    $(window).bind('scroll', function() {
        var navHeight = $('.header').height();
        if ($(window).scrollTop() > 100) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });
});



/******************************* */

jQuery(document).ready(function($) {
    // Lazy Load Images using Intersection Observer
    (function() {
        var observer = new IntersectionObserver(onIntersect);

        document.querySelectorAll("[data-lazy]").forEach((img) => {
            observer.observe(img);
        });

        function onIntersect(entries) {
            entries.forEach((entry) => {
                if (entry.target.getAttribute("data-processed") || !entry.isIntersecting)
                    return true;
                entry.target.setAttribute("src", entry.target.getAttribute("data-src"));
                entry.target.setAttribute("data-processed", true);
            });
        }
    })();
});





/************   mobile watermark ******************** */

// // Select the elements
// const heroImage = document.getElementById('hero-mobile-watermark');
// const heroDiv = document.getElementById('pr-hero');

// // Options for the Intersection Observer
// const options_watermark = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0.5 // Adjust the threshold as needed
// };

// // Intersection Observer callback function
// const callback = (entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       heroImage.classList.add('fixed-mobile-watermark');
//     } else {
//       heroImage.classList.remove('fixed-mobile-watermark');
//     }
//   });
// };

// // Create the Intersection Observer instance
// const mobile_watermark_observer = new IntersectionObserver(callback, options_watermark);

// // Observe the heroDiv
// mobile_watermark_observer.observe(heroDiv);










/************   counter 140 countries ******************** */

// let number = 0;
// const spanElement = document.getElementById('countries-countup');

// function handleIntersection(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const interval = setInterval(() => {
//         spanElement.textContent = number;

//         if (number >= 140) {
//           clearInterval(interval);
//           observer.unobserve(spanElement);
//         } else {
//           number++;
//         }
//       }, 1500 / 140); // 1500 milliseconds divided by 140 increments
//     }
//   });
// }

// const options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0
// };

// const observer = new IntersectionObserver(handleIntersection, options);
// observer.observe(spanElement);






// /**************   CALL TO ACTION BUTTON  ************* */

// // Get references to all the buttons with the class "gocpt"
// const buttons = document.querySelectorAll('.gocpt');





// // Smooth scroll to the top of the page




// // Add a click event listener to each button
// buttons.forEach((button) => {
//   button.addEventListener('click', () => {



//             // Check if body has class "ismobile"
//             var body = document.body;
//             if (body.classList.contains('ismobile')) {
//                     // Get a reference to the element you want to scroll to
//                     const element = document.getElementById('orderform');

//                     // Calculate the target scroll position by adding the current scroll position with the offset
//                     const targetScrollPosition = element.offsetTop - 100;

//                     // Scroll to the target position
//                     window.scrollTo({
//                     top: targetScrollPosition,
//                     behavior: 'smooth' // Optionally, you can make the scroll behavior smooth
//                     });

//             } else {
//                 window.scroll({
//                     top: 0,
//                     left: 0,
//                     behavior: 'smooth'
//                 });

//             }





//   });
// });