// swap the background with buttons in the corner

const plus_button = document.getElementById("plus_button")
const minus_button = document.getElementById("minus_button")
const index_counter = document.getElementById("index_counter")

var body = document.body
var index = 0
const index_max = 5

plus_button.addEventListener("click", function() {
    index++
    update_bg()
})

minus_button.addEventListener("click", function() {
    index--;
    update_bg()
})

function update_bg() {
    if (index < 0) {
        index = index_max
    } else if (index > index_max) {
        index = 0
    }

    index_counter.textContent = index

    switch (index) {
        case 0:
            body.style.backgroundImage = 'url("img/uss_voyager_ascii.png")'
            body.style.backgroundRepeat = "cover"
            body.style.backgroundSize = "100%"
            body.style.backgroundPosition = "center 40%"
            break;
        case 1:
            body.style.backgroundImage = 'url("img/bs_green3.png")'
            body.style.backgroundRepeat = "no-repeat"
            body.style.backgroundSize = "100%"
            break;    
        case 2:
            body.style.backgroundImage = 'url("img/h_and_h_ascii.png")'
            body.style.backgroundRepeat = "cover"
            body.style.backgroundSize = "100%"
            body.style.backgroundPosition = "center 40%"
            break;
        case 3:
            body.style.backgroundImage = 'url("img/bg_new.png")'
            body.style.backgroundRepeat = "repeat"
            body.style.backgroundSize = "20%"
            break;
        case 4:
            body.style.backgroundImage = 'url("img/holy_diver.png")'
            body.style.backgroundRepeat = "stretch"
            body.style.backgroundSize = "100%"
            body.style.backgroundPosition = "center 40%"
            break;
        case 5:
            body.style.backgroundImage = 'url("img/grid.png")'
            body.style.backgroundRepeat = "repeat"
            body.style.backgroundSize = "20%"
            break;
    }
}