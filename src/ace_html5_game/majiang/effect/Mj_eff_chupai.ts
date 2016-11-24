import DisplayObject = egret.DisplayObject;
import Tween = egret.Tween;
import Ease = egret.Ease;
/**
 * Mj_eff_chupai
 * @Author Ace.c
 * @Create 2016-11-18 13:51
 */
class Mj_eff_chupai {

    private static Duration_Move: number = 300;
    private static Duration_Wait: number = 1000;
    private static Margin: number = 200;

    static play(target: DisplayObject, dir: GameDir8, tarX: number, tarY: number, callback?: Function, thisObj?: any) {
        // target.alpha = 0.5;

        var midX: number = 0;
        var midY: number = 0;

        switch (dir) {
            case GameDir8.Up:
                midX = (Game.stage.stage.stageWidth - target.width) >> 1;
                midY = this.Margin;
                break;
            case GameDir8.Down:
                midX = (Game.stage.stageWidth - target.width) >> 1;
                midY = Game.stage.stageHeight - this.Margin;
                break;
            case GameDir8.Left:
                midX = this.Margin;
                midY = (Game.stage.stageHeight - target.height) >> 1;
                break;
            case GameDir8.Right:
                midX = Game.stage.stageWidth - this.Margin;
                midY = (Game.stage.stageHeight - target.height) >> 1;
                break;
        }

        Tween.get(target)
            .to({
                x: midX,
                y: midY,
                scaleX: 1.5,
                scaleY: 1.5,
                alpha: 1
            }, this.Duration_Move, Ease.cubicIn)
            .wait(this.Duration_Wait)
            .to({
                x: tarX,
                y: tarY,
                scaleX: .8,
                scaleY: .8,
                alpha: 1
            }, this.Duration_Move, Ease.cubicOut)
            .call(callback, thisObj);
    }
}