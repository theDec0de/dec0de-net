// swap the background with buttons in the corner

const plus_button = document.getElementById("plus_button")
const minus_button = document.getElementById("minus_button")
const index_counter = document.getElementById("index_counter")

var body = document.body
var index = 0;

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
        index = 0
    } else if (index > 2) {
        index = 2
    }

    index_counter.textContent = index

    switch (index) {
        case 0:
            body.style.backgroundImage = 'url("img/bg_new.png")'
            body.style.backgroundRepeat = "repeat"
            body.style.backgroundSize = "10%"
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
    }
}