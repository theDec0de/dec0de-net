const prev_button = document.getElementById("prev_button")
const play_button = document.getElementById("play_button")
const next_button = document.getElementById("next_button")
const player_label = document.getElementById("player_label")
const palyer_audio = document.getElementById("player_audio")

const audio = new Audio()

var index = 0
let playing = false

play_button.addEventListener("click", function() {
    if (playing) {
        playing = false
        update_music(playing)
        play_button.textContent = "Play"
    } else if (!playing) {
        playing = true
        update_music(playing)
        play_button.textContent = "Pause"
    }
})

prev_button.addEventListener("click", function() {
    index--
    update_player_index(index)
})
next_button.addEventListener("click", function() {
    index++
    update_player_index(index)
})

function update_music(is_playing) {
    if (is_playing) {
        audio.play()
    } else {
        audio.pause()
    }
}

function update_player_index(index) {

    if (index < 0) {
        index = 0
    } else if (index > 3) {
        index = 3
    }

    switch (index) {
        case 0:
            player_label.textContent = index+" | No Music Selected"
            audio.src = ""
            break;
        case 1:
            audio.src = "audio/lains_theme.mp3"
            player_label.textContent = index+" | Lain's Theme.mp3"
            break;
        case 2:
            player_label.textContent = index+" | N/A"
            audio.src = ""
            break;
        case 3:
            player_label.textContent = index+" | N/A"
            audio.src = ""
            break;
    }

    audio.load()

    if (playing) {
        audio.play()
    }
}

document.querySelectorAll(".slider").forEach(slider => {
    const track = slider.querySelector(".slider-track");
    const thumb = slider.querySelector(".slider-thumb");
    const fill = slider.querySelector(".slider-fill");
    const input = slider.querySelector(".slider-input");
  
    const min = +input.min;
    const max = +input.max;
  
    function updateUI(value) {
      const percent = ((value - min) / (max - min)) * 100;
      thumb.style.left = percent + "%";
      fill.style.width = percent + "%";
      input.value = value;
  
      audio.volume = value / 100;
    }
  
    function getValueFromPosition(clientX) {
      const rect = track.getBoundingClientRect();
      let percent = (clientX - rect.left) / rect.width;
      percent = Math.max(0, Math.min(1, percent));
      return Math.round(min + percent * (max - min));
    }
  
    function onPointerMove(e) {
      updateUI(getValueFromPosition(e.clientX));
    }
  
    thumb.addEventListener("pointerdown", e => {
      e.preventDefault();
      document.addEventListener("pointermove", onPointerMove);
      document.addEventListener("pointerup", () => {
        document.removeEventListener("pointermove", onPointerMove);
      }, { once: true });
    });
  
    track.addEventListener("pointerdown", e => {
      updateUI(getValueFromPosition(e.clientX));
    });
  
    // Initialize correctly
    updateUI(+input.value);
  });