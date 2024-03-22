
document.getElementById("scroll_left").onclick = function() {
    
    var asideOptions = document.getElementById("aside_options");
    
    asideOptions.scrollTo({
        left: asideOptions.scrollLeft - 200, 
        behavior: 'smooth' // Desplazamiento suave
    });
};


document.getElementById("scroll_right").onclick = function() {
    
    var asideOptions = document.getElementById("aside_options");
    
    asideOptions.scrollTo({
        left: asideOptions.scrollLeft + 200, 
        behavior: 'smooth' // Desplazamiento suave
    });
};