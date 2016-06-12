/**
 * Created by Ace.C on 2016/4/13.
 */
module manager {
    export class BaseManager extends event.CustomEvent {

        //游戏管理器
        public gameManager:manager.GameManager;

        public constructor() {
            super();

            this.gameManager = manager.GameManager.getInstance();
        }

        public initManager():void {

        }
    }
}