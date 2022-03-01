input.onButtonPressed(Button.A, function () {
    target += -1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(target)
    radio.sendValue("id", 8)
    radio.sendValue("try", target)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    target += 1
})
let target = 0
basic.showIcon(IconNames.SmallHeart)
target = 50
radio.setGroup(99)
