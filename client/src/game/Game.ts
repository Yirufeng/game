/**
 *
 * @Author Ace.c
 * @Time 2016-06-12 10:39.
 */
class game {
    public static stage:egret.Stage;

    public static get stageWidth():number {
        return this.stage.stageWidth;
    }

    public static get stageHeight():number {
        return this.stage.stageHeight;
    }

    public static linkType:config.LinkType;

    public static startUp(stage:egret.Stage):void {
        this.stage = stage;
    }
}