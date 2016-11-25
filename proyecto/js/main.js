var imgs = document.getElementsByName("artistimg");
var names = document.getElementsByName("artistname");

for(var i = 0; i < imgs.length; i++) {
    var num = i;
    console.log('prueba');
    imgs[i].addEventListener("mouseover", onHover(names[num]));
    imgs[i].addEventListener("mouseout", onHoverEnd(names[num]));
    names[i].addEventListener("mouseover", onHover(names[num]));
    names[i].addEventListener("mouseout", onHoverEnd(names[num]));
    names[i].setAttribute("style", "opacity: 0;transition: all .3s linear;");
}

function onHover(element) {
    return function() {
        element.setAttribute("style", "opacity: 1;transition: all .3s linear;");
        console.log('sidaso');
    }
}

function onHoverEnd(element) {
    return function() {
        element.setAttribute("style", "opacity: 0;transition: all .3s linear;");
        console.log('sidaso');
    }
}
