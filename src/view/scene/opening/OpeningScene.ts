/**
 * OpeningScene
 * @Author Ace.c
 * @Create 2016-11-18 16:13
 */
class OpeningScene extends BaseScene {

    card: eui.Image;

    public constructor() {
        super();

        this.skinName = "OpeningSceneSkin";
        this.id = SceneType;
    }

    public childrenCreated() {
        super.childrenCreated();

        console.log(this.stage.stageWidth, this.stage.stageHeight);
        console.log(Core.stage.stageWidth, Core.stage.stageHeight);

        this.card.x = Core.stage.stageWidth - this.card.width - 10;
        this.card.y = Core.stage.stageHeight - this.card.height - 10;

        this.card.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickHandler, this);
    }

    private clickHandler(e: egret.TouchEvent) {
        this.card.x = Core.stage.stageWidth - this.card.width - 10;
        this.card.y = Core.stage.stageHeight - this.card.height - 10;
    }
}