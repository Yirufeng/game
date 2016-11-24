/**
 * Majiang
 * @Author Ace.c
 * @Create 2016-11-18 13:46
 */
class Majiang {

    /**
     * 转换游戏方向(上下左右)
     * @param self
     * @param target
     * @returns {GameDir8}
     */
    static getGameDir(self: GameDir4, target: GameDir4): GameDir8 {
        var gameDir: GameDir8;

        if (self == target) {//自己
            gameDir = GameDir8.Down;
        }
        else if (self % 2 == target % 2) {//对家
            gameDir = GameDir8.Up;
        }
        else if (self == target + 1 || self == target - 3) {//下家
            gameDir = GameDir8.Right;
        }
        else if (self == target - 1 || self == target + 3) {//上家
            gameDir = GameDir8.Left;
        }
        return gameDir;
    }

    /**
     * 打牌
     * @param curDir
     * @param tarDir
     * @param target
     * @param tarX
     * @param tarY
     * @param callback
     * @param thisObj
     */
    static dapai(curDir: GameDir4, tarDir: GameDir4, target: egret.DisplayObject, tarX: number, tarY: number, callback?: Function, thisObj?: any) {
        Mj_eff_chupai.play(target, this.getGameDir(curDir, tarDir), tarX, tarY, callback, thisObj);
    }
}