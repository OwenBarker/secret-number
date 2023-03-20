input.onButtonPressed(Button.A, function () {
    number += 1
})
input.onButtonPressed(Button.AB, function () {
    if (number == Secret_Number) {
        basic.showString("WINNER")
    } else if (number < Secret_Number) {
        basic.showString("TOO LOW")
    } else if (number > Secret_Number) {
        basic.showString("TOO HIGH")
    }
})
input.onButtonPressed(Button.B, function () {
    number += -1
})
let number = 0
let Secret_Number = 0
Secret_Number = randint(0, 20)
number = 0
basic.forever(function () {
	
})
