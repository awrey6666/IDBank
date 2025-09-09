const slider = document.querySelector(".slider_box")
const buttons = document.querySelectorAll(".slide_button")
let checkBtn = 0
buttons.forEach((btn, i) => {
    btn.addEventListener("click", function () {
        buttons[checkBtn].classList.remove("check_Button")
        checkBtn = i
        buttons[i].classList.add("check_Button")
        slider.style.transform = `translateX(-${i * 25}%)`
    })
});



const sliderBox2 = document.querySelector(".slider_box2")
const toLeft = document.querySelector(".to_left")
const toRight = document.querySelector(".to_right")
let transform = 0

toLeft.addEventListener("click", function () {
    toRight.classList.remove("display_none")
    transform--
    sliderBox2.style.transform = `translate(-${transform * 25}%)`
    if (transform == 0) {
        toLeft.classList.add("display_none")
    }
})

toRight.addEventListener("click", function () {
    toLeft.classList.remove("display_none")
    transform++
    sliderBox2.style.transform = `translate(-${transform * 25}%)`
    if (transform == 2) {
        toRight.classList.add("display_none")
    }
})





const radio = document.querySelector(".radio_1")
const circle = document.querySelector(".circle")
const radioLeft = document.querySelector(".radio_1_left")
const radioRight = document.querySelector(".radio_1_right")

let click = 0
radio.addEventListener("click", function () {
    click++
    if (click == 1) {
        circle.style.alignSelf = "flex-end"
        radioLeft.style.color = "#A0A0A0"
        radioRight.style.color = "black"
    }
    else {
        click = 0
        circle.style.alignSelf = "flex-start"
        radioLeft.style.color = "black"
        radioRight.style.color = "#A0A0A0"
    }

})

radioLeft.addEventListener("click", function () {
    circle.style.alignSelf = "flex-start"
    radioLeft.style.color = "black"
    radioRight.style.color = "#A0A0A0"
})
radioRight.addEventListener("click", function () {
    circle.style.alignSelf = "flex-end"
    radioLeft.style.color = "#A0A0A0"
    radioRight.style.color = "black"
})