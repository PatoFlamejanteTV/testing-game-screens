def isTouching(_1: game.LedSprite, _2: game.LedSprite):
    if _1.get(LedSpriteProperty.X) == _2.get(LedSpriteProperty.X) and _1.get(LedSpriteProperty.Y) == _2.get(LedSpriteProperty.Y):
        GAMEOVER_SCREEN.show_image(0)
GAMEOVER_SCREEN: Image = None
PLAYER = game.create_sprite(0, 0)
KILLBRICK = game.create_sprite(1, 1)
GAMEOVER_SCREEN = images.create_image("""
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    """)
WIN_SCREEN = images.create_image("""
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    . . . . .
    """)

def on_forever():
    isTouching(PLAYER, WIN_SCREEN)
basic.forever(on_forever)
