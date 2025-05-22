input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    display.writeString("", input.temperature(), 1)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    display.writeString("", pins.analogReadPin(AnalogReadWritePin.P1), 1)
})
basic.forever(function () {
	
})
