basic.show_icon(IconNames.HEART)
basic.show_string("Hello!")
basic.pause(1000)
basic.show_string("Bye!")

def on_forever():
    basic.show_icon(IconNames.HAPPY)
    basic.pause(1000)
    basic.show_string("Bye!")
basic.forever(on_forever)
