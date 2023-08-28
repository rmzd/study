/*$(function(){
    $('.header__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        speed: 1000,
        fade: true
    });
});

$(function(){
    $('.projects__slider-photo').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        arrows: true,
        dots: false,
        infinite: true,
        // autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        speed: 1000,
        fade: true,
        asNavFor: '.projects__slider-info'
    });
});

$(function(){
    $('.projects__slider-info').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        arrows: false,
        dots: false,
        infinite: true,
        // autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        speed: 1000,
        fade: true,
        asNavFor: '.projects__slider-photo'
    });
});

$(function(){
    $('.contact-customers__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        lazyLoad: 'ondemand',
        arrows: true,
        dots: false
    });
});*/
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

const form = document.getElementById('form');

form.addEventListener('submit', getFormValue);

cost = 0;
function getFormValue(event) {
    event.preventDefault();
    const type = form.querySelector('[name="type"]');
    const number = form.querySelector('[name="number"]'), tema = form.querySelector('[name="tema"]'), podrobnost = form.querySelector('[name="podrobnost"]')
    cost = 0;
    const data = {
        number: number.value,
        //tema: tema.value,
       // podrobnost: podrobnost.value,
        type: type.value
    };
    console.log(data);
    if (type.value == "1") {
        cost += 6000;
        console.log("cost");
    }
    else if ("2" == type.value) {
        cost += 3000;
    }
    else if ("3" == type.value) {
        cost += 2000;
    }
    else if ("4" == type.value){
        cost += 1000;
    }
    cost += data.number * 300;
    reload();
}
function reload() {
    console.log(cost);
    document.getElementById('message').innerHTML = cost;
}

var faq = document.getElementsByClassName("faq-unit");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("faq-unit--active");
    });
}
