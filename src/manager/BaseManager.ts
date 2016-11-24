/**
 * Created by Ace.C on 2016/4/13.
 */
class BaseManager extends GameDispatcher {

    //游戏管理器
    public gameManager:GameManager;
    //对象集合
    public objectSet: any = {};

    public constructor() {
        super();
        this.gameManager = GameManager.getInstance();
        this.objectSet = {};
    }

    public initManager():void {
    }
}