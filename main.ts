input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    basic.pause(1000)
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
    basic.pause(1000)
    basic.showString("Bye!")
})
