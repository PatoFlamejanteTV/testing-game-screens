function isTouching (_1: game.LedSprite, _2: game.LedSprite) {
    if (_1.get(LedSpriteProperty.X) == _2.get(LedSpriteProperty.X) && _1.get(LedSpriteProperty.Y) == _2.get(LedSpriteProperty.Y)) {
        GAMEOVER_SCREEN.showImage(0)
    }
}
function SHOW_SCREEN (SCREEN: string) {
    if (SCREEN == "GAME_OVER") {
        GAMEOVER_SCREEN.showImage(0)
        music.play(DEATH_SFX, music.PlaybackMode.UntilDone)
    } else {
        if (SCREEN == "WIN_SCREEN") {
            WIN_SCREEN.showImage(0)
            music.play(WIN_SFX, music.PlaybackMode.UntilDone)
        } else {
            images.createBigImage(`
                # # # . . . . # # #
                . . # . . . . . . #
                . # # . . . . . # #
                . . . . . . . . . .
                . # . . . . . . # .
                `).scrollImage(1, 200)
        }
    }
}
let WIN_SFX: SoundExpression = null
let DEATH_SFX: SoundExpression = null
let WIN_SCREEN: Image = null
let GAMEOVER_SCREEN: Image = null
GAMEOVER_SCREEN = images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
WIN_SCREEN = images.createImage(`
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    . . . . .
    `)
DEATH_SFX = music.createSoundExpression(WaveShape.Sawtooth, 1428, 0, 255, 0, 1000, SoundExpressionEffect.Warble, InterpolationCurve.Linear)
WIN_SFX = music.createSoundExpression(WaveShape.Triangle, 5000, 0, 255, 0, 1000, SoundExpressionEffect.Warble, InterpolationCurve.Linear)
