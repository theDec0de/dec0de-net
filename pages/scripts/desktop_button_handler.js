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

document.getElementById("window_button").addEventListener("click", function() {
    document.getElementById("new_window").classList.remove("hide_window")
})

document.getElementById("close_button").addEventListener("click", function() {
    document.getElementById("new_window").classList.add("hide_window")
})