var imgs = document.getElementsByName("artistimg");
var names = document.getElementsByName("artistname");

for(var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("mouseover", onHover(names[i]));
    imgs[i].addEventListener("mouseout", onHoverEnd(names[i]));
    names[i].addEventListener("mouseover", onHover(names[i]));
    names[i].addEventListener("mouseout", onHoverEnd(names[i]));
}

function onHover(element) {
    return function() {
        element.setAttribute("style", "opacity: 1;transition: all .3s linear;");
    }
}

function onHoverEnd(element) {
    return function() {
        element.setAttribute("style", "opacity: 0;transition: all .3s linear;");
    }
}
