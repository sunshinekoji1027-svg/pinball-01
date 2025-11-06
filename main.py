センサONになった時ミリ秒 = 0
def 点灯タイマー():
    global センサONになった時ミリ秒
    basic.show_icon(IconNames.HEART)
    センサONになった時ミリ秒 = control.millis()
    if control.millis() - センサONになった時ミリ秒 <= 1000:
        basic.clear_screen()

def on_forever():
    if pins.digital_read_pin(DigitalPin.P0) == 1:
        点灯タイマー()
basic.forever(on_forever)
