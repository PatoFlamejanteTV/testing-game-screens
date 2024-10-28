function isTouching (_1: game.LedSprite, _2: game.LedSprite) {
    if (_1.get(LedSpriteProperty.X) == _2.get(LedSpriteProperty.X) && _1.get(LedSpriteProperty.Y) == _2.get(LedSpriteProperty.Y)) {
        GAMEOVER_SCREEN.showImage(0)
    }
}
let GAMEOVER_SCREEN: Image = null
let PLAYER = game.createSprite(0, 0)
GAMEOVER_SCREEN = images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
let WIN_SCREEN = images.createImage(`
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    . . . . .
    `)
let DEATH_SFX = music.createSoundExpression(WaveShape.Sawtooth, 1428, 0, 255, 0, 1000, SoundExpressionEffect.Warble, InterpolationCurve.Linear)
let WIN_SFX = music.createSoundExpression(WaveShape.Triangle, 5000, 0, 255, 0, 1000, SoundExpressionEffect.Warble, InterpolationCurve.Linear)
