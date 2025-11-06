input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
function 点灯タイマー () {
	
}
function 設定時間表示 () {
	
}
let P0値 = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        P0値 = 1
        basic.showIcon(IconNames.Heart)
    } else {
        P0値 = 0
        basic.clearScreen()
    }
})
