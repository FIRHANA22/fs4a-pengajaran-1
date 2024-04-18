/**
 * Cuba sendiri: Paparkan emoji kenyitan mata pada papan micro:bit anda
 */
basic.showString("Hello!")
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
})
