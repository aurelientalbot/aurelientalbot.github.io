
function ajusterPaddingTop() {
  //  var hauteurTopBar = document.querySelector(".top-bar") ? document.querySelector(".top-bar").offsetHeight : 0;
    var hauteurMenu = document.querySelector("header").offsetHeight;
    var hauteurTotale = hauteurMenu;
 //  var hauteurTotale = hauteurTopBar + hauteurMenu;
    
    document.querySelector(".accueil").style.paddingTop = hauteurTotale + "px";
}

// Ajuster le padding-top lors du chargement du document et au redimensionnement de la fenêtre
document.addEventListener("DOMContentLoaded", function () {
    ajusterPaddingTop();
    window.addEventListener("resize", ajusterPaddingTop);
});



// On attend que le DOM soit entièrement chargé
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector('.navbar-menu-toggle');
  const menuLinksBox = document.querySelector('.navbar-menu-links-box');

  // Au clic sur le bouton de toggle
  menuToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    // Toggle l'affichage du menu
    if (menuLinksBox.style.display === "none" || menuLinksBox.style.display === "") {
      menuLinksBox.style.display = "block";
    } else {
      menuLinksBox.style.display = "none";
    }
  });

  // Au clic n'importe où ailleurs sur la page, fermer le menu
  document.addEventListener('click', function (e) {
    if (!menuToggle.contains(e.target) && !menuLinksBox.contains(e.target)) {
      menuLinksBox.style.display = "none";
    }
  });

  // Empêche la propagation du clic dans le menu
  menuLinksBox.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});




function ajusterPaddingTop() {
    var hauteurMenu = document.querySelector(".navbar").offsetHeight;
    var hauteurTotale = hauteurMenu;
    
    document.querySelector(".accueil").style.paddingTop = hauteurTotale + "px";
}

// Ajuster le padding-top lors du chargement du document et au redimensionnement de la fenêtre
document.addEventListener("DOMContentLoaded", function () {
    ajusterPaddingTop();
    window.addEventListener("resize", ajusterPaddingTop);
});




window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  
  if (window.scrollY > 50) { // Change 50 par la valeur de ton choix
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
