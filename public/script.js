
var elemA = document.querySelector(".realisations_row_project__GnEkb");
//let itemElem = document.querySelector(".card_col__2oHSl").getAttribute("data-filter");
/*var iso = new Isotope(elemA, {
    itemSelector: '.card_col__2oHSl',
    layoutMode: 'fitRows'
})*/


  
//var filterValue = event.target.getAttribute('data-filter');
// use matching filter function
//filterValue = filterFns[ filterValue ] || filterValue;
iso.arrange({ filter: "Application mobile" });


console.log(itemElem);