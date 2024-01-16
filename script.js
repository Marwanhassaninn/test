// function toggleMenu() {
//     var navLinks = document.getElementById("navLinks");
//     navLinks.classList.toggle("show");
// }

function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}
// second function
var links = document.querySelectorAll(".nav-links a");
links.forEach(function(link) {
    link.addEventListener("click", function() {
        var navLinks = document.getElementById("navLinks");
        navLinks.classList.remove("show");
    });
});

   

document.addEventListener('DOMContentLoaded', function () {
    // Initialize lightGallery on all elements with the 'btn-view' class
    document.querySelectorAll('.btn-view').forEach(function (element) {
        element.addEventListener('click', function () {
            lightGallery(element, {
                dynamic: true,
                dynamicEl: [{
                    src: element.getAttribute('data-src'),
                }],
            });
        });
    });
});


