$('.carousel.carousel-slider').carousel({fullWidth: true});
$(".button-collapse").sideNav();

$('.button-collapse').sideNav({
    menuWidth: 200, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: false
    }
);