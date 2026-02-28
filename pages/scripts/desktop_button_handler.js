var window_ = document.getElementById("new_window")
var window_frame = document.getElementById("new_window_iframe")
var window_header = document.getElementById("new_window_text")


document.getElementById("terminal_button").addEventListener("click", function() {
    window.location.href = "menu.html"
})

document.getElementById("about_button").addEventListener("click", function() {
    window.location.href = "about.html"
})

document.getElementById("hobbies_button").addEventListener("click", function() {
    window.location.href = "hobbie_and_projects.html"
})

document.getElementById("nn_button").addEventListener("click", function() {
    window.location.href = "net_neighbors.html"
})

document.getElementById("foundation_button").addEventListener("click", function() {
    window.location.href = "foundation_files.html"
})

document.getElementById("snake_button").addEventListener("click", function() {
    window_.classList.remove("hide_window")
    window_frame.src = "snake_game.html"
    window_header.textContent = "Snake Game"
})

document.getElementById("warp_button").addEventListener("click", function() {
    window_.classList.remove("hide_window")
    window_frame.src = ""
    window_header.textContent = "Warp"
})

document.getElementById("close_button").addEventListener("click", function() {
    window_.classList.add("hide_window")
})